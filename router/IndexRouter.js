const express = require("express")
const router = express()

router.get("/", (_, res) => {
    res.send(`IT기술실무 기말고사 과제입니다.<br>자세한 내용은 <a href="https://github.com/IDU-SW/202112709_PSM">https://github.com/IDU-SW/202112709_PSM</a>를 참고해주세요.`);
});

module.exports = router;