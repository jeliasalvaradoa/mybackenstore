const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$e.71gZL22m0Sfv/hZxczhuGmdistWkdr5qYalUsJwhcCQOwBgMVxO';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
