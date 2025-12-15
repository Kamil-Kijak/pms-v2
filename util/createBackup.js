const config = require("./config");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const createBackup = () => {
    const today = new Date()
    const backupDir = config.backupDir;
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir);
    // deleting old backup
    fs.readdir(backupDir, (err, files) => {
        if(err) {
            console.error('Błąd podczas odczytu folderu:', err);
        }
        if(files.length > 7) {
            let oldestFile = null;
            let oldestTime = today.getTime();
            files.forEach((file) => {
                const filePath = path.join(backupDir, file);
                const stats = fs.statSync(filePath)
                if (stats.isFile() && stats.mtimeMs < oldestTime) {
                    oldestTime = stats.mtimeMs;
                    oldestFile = filePath;
                }
            })
            if(oldestFile) {
                fs.unlink(oldestFile, err => {
                    if(err) {
                        console.error('Błąd podczas usuwania pliku', err);
                    }
                });
            }
        }
        const fileName = `DB-${today.toLocaleDateString("sv-SE")}`;
        const filePath = path.join(backupDir, fileName);
        const dumpCommand = `mysqldump -h ${config.dbHost} -u ${config.dbUser} ${config.dbPassword ? `-p${config.dbPassword}` : ""} ${config.dbName} > ${filePath}.sql`;
        exec(dumpCommand, (err, stdout, stderr) => {
            if(err) {
                console.log("bład podczas tworzenie backup", err.message)
            } else {
                console.log("Backup zapisany w", filePath);
            }
        });
    });
}

module.exports = createBackup;