const resetenv = () => {
  delete process.env.UI_URL
  delete process.env.API_URL
  delete process.env.DB_HOST
  delete process.env.DB_SCHEMA
  delete process.env.DB_USER
  delete process.env.DB_PASSWORD
}

module.exports = resetenv