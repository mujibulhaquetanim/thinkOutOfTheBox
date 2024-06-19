const { Router } = require("express");

const router = Router();

router.route('/').get((_, res) => {
    res.json('This Content list is Shown below:');
})

module.exports = router;