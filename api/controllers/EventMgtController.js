/**
 * EventMgtController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // action - create
    // create: async function (req, res) {

    //     if (req.method == "GET")
    //         return res.view('pages/homepage.ejs');

    //     if (typeof req.body.EventMgt === "undefined")
    //         return res.badRequest("Form-data not received.");

    //     await EventMgt.create(req.body.EventMgt);

    //     return res.ok("Successfully created!");
    // },
    // action - index
    index: async function (req, res) {

        return res.view('pages/homepage.ejs');

    },
    search: async function (req, res) {

        return res.view('pages/search.ejs');

    },

};

