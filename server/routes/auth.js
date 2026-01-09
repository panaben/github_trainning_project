const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  // TODO: 本番ではハッシュ化・バリデーション・DB 書き込み
  if (!email || !password) return res.status(400).json({ error: 'missing params' });
  // 仮のレスポンス
  return res.status(201).json({ id: 1, name, email });
});
//
module.exports = router;
