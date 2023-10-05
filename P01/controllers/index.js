let firstName = "Daniel";
let lastName = "Torres";

const getUserName = (req, res) => {
    res.send(`${firstName} ${lastName}`);
  };
  
module.exports = { getUserName };