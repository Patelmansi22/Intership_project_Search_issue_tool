const mongoose = require("mongoose");
const Issue = require("../../model/issue");
const Comments = require("../../model/comments");

const { pagination } = require("../../services/paggenation");

/**
 * Get All Issues Controller For All User...
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 */
const getIssueController = async (req, res) => {
  console.log("========= getIssueController ======");
  if (req.params.id) {
    Issue.find({ _id: req.params.id })
      .then((result) => {
        res.status(200).json({
          Data: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ Status: "Faill", Error: "Request Id Not Valid ..." });
      });
  } else if (req.params.page && req.params.limit) {
    const result = await pagination(req.params.page, req.params.limit, Issue);
    res.status(200).json({
      Count: result.length,
      Data: result,
    });
  } else {
    Issue.find().then((result) => {
      res.status(200).json({
        Data: result,
      });
    });
  }
};

/**
 * Get All Issues Controller For All User...
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 */
const commentController = async (req, res) => {
  console.log("========= getIssueController ======");
  if (req.params.id) {
    Comments.find({ _id: req.params.id })
      .then((result) => {
        res.status(200).json({
          Data: result,
        });
      })
      .catch((err) => {
        console.log(err.message);
        res
          .status(500)
          .json({ Status: "Faill", Error: "Request Id Not Valid ..." });
      });
  } else {
    Comments.find()
      .then((result) => {
        res.status(200).json({
          Data: result,
        });
      })
      .catch((err) => {
        console.log(err.message);
        res
          .status(500)
          .json({ Status: "Faill", Error: "Someting Went Wrong..." });
      });
  }
};

/**
 * Post Comment Controller For All User...
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 */
const insertCommentController = async (req, res) => {
  console.log("========= insertCommentController ======");
  // req.user
  try {
    if (!req.body.content) {
      res.status(500).send({ status: "Fail", message: "Enter Comment..." });
    } else if (!req.body.issueId) {
      res.status(500).send({ status: "Fail", message: "Enter issueId..." });
    } else {
      const comment = new Comments({
        userID: req.user[0]._id,
        user_EmployID: req.user[0].employee_id,
        content: req.body.content,
        issueId: req.body.issueId,
        postDate: new Date(),
      });
      let result = await comment.save();
      res.status(200).json({
        Status: "Success",
        Data: result,
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ status: "Fail", message: "Something Went Wrong..." });
  }
};

/**
 * Update comment All Issues Controller For All User...
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 */
const updateCommentController = async (req, res) => {
  console.log("========= updateCommentController ======");
  if (!req.params.id) {
    res.status(500).json({ Status: "Fail", message: "Enter Comment Id.." });
  } else if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res
      .status(500)
      .json({ Status: "Fail", message: "Enter Valid Comment Id.." });
  } else if (!req.body.content) {
    res.status(500).json({ Status: "Fail", message: "Enter Comment .." });
  } else {
    Comments.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          content: req.body.content,
          lastUpdate: new Date(),
        },
      }
    ).then((result) => {
      if (result) {
        res.status(200).json({
          updated_comment: result,
        });
      } else {
        res.status(500).json({
          Message: "Requested Comment Id Not Found..",
        });
      }
    });
  }
};

/**
 * Inser Issue comment All Issues Controller For All User...
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 */
const insertIssueController = async (req, res) => {
  console.log("========= insertIssueController ======");
console.log("requestbody",req.body)
  try {
    if (!req.body.title && !req.body.description) {
      res.status(500).send({
        status: "Fail",
        message: "Please Enter title ,description,status.",
      });
    } else if (!req.body.title) {
      res.status(500).send({
        status: "Fail",
        message: "Please Enter title .",
      });
    } else if (!req.body.description) {
      res.status(500).send({
        status: "Fail",
        message: "Please Enter description .",
      });
    } else {
      const issue = new Issue({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        timestamp: req.body.timestamp,
        userID: req.user[0]._id,
        user_EmployID: req.user[0].employee_id,
        postDate: new Date(),
      });
      let result = await issue.save();
      res.status(200).json({
        Status: "Success",
        Data: result,
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ status: "Fail", message: "Something Went Wrong..." });
  }
};

/**
 * Update Issue comment All Issues Controller For All User...
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 */
const updateIssueController = async (req, res) => {
  console.log("========= updateIssueController ======");

  if (!req.params.id) {
    res.status(500).json({ Status: "Fail", message: "Enter Issue Id.." });
  } else if (!req.body.title) {
    res.status(500).json({ Status: "Fail", message: "Enter Title." });
  } else if (!req.body.description) {
    res.status(500).json({ Status: "Fail", message: "Enter description." });
  } else if (!req.body.status) {
    res.status(500).json({ Status: "Fail", message: "Enter status." });
  } else if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(500).json({ Status: "Fail", message: "Enter Valid Issue Id.." });
  } else {
    Issue.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          status: req.body.status,
          timestamp: req.body.timestamp,
        },
      }
    ).then((result) => {
      if (result) {
        res.status(200).json({
          updated_comment: result,
        });
      } else {
        res.status(500).json({
          Message: "Requested Issue Id Not Found..",
        });
      }
    });
  }
};
// const searchIssueController =async (req,res)=>{
  
//   app.get('/search', async (req, res) => {
//     const query = req.query.q;
  
//     if (!query) {
//       res.status(400).send('Missing query parameter');
//       return;
//     }
  
//     try {
//       const { body } = await client.search({
//         index: 'my_index',
//         body: {
//           query: {
//             match: {
//               title: query,
//             },
//           },
//         },
//       });
  
//       const results = body.hits.hits.map((hit) => hit._source);
  
//       res.send(results);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('An error occurred');
//     }
//   });
  
// }
module.exports = {
  getIssueController,
  commentController,
  insertCommentController,
  updateCommentController,
  insertIssueController,
  updateIssueController,
  // searchIssueController,
};
