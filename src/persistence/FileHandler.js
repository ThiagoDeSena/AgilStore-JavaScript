const fs = require("fs");
const path = require("path");

const DB_DIR = path.join(__dirname, "../data");
const DB_PATH = path.join(DB_DIR, "database.json");

class FileHandler {
  static carregar() {
    try {
      if (!fs.existsSync(DB_PATH)) return [];

      const data = fs.readFileSync(DB_PATH, "utf-8");

      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(
        "Erro ao carregar dados do inventário. Iniciando lista vazia."
      );
      return [];
    }
  }

  static salvar(dados) {
    try {
      if (!fs.existsSync(DB_DIR)) {
        fs.mkdirSync(DB_DIR, { recursive: true });
      }

      fs.writeFileSync(DB_PATH, JSON.stringify(dados, null, 2));
    } catch (error) {
      console.error("Erro fatal ao salvar no disco:", error.message);
    }
  }
}

module.exports = FileHandler;
