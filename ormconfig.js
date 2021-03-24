console.log('process.env.database_url : >>', process.env.DATABASE_URL)
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    "src/models/**/*.ts"
  ],
  "migrations": [
  "src/migrations/**/*.ts"
],
  "cli":{
  "migrationsDir": [
    "src/migrations/"
  ],
  "entitiesDir": "src/models"
  }
}