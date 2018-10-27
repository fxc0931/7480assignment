/**
 * EventMgtController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    index: async function (req, res) {
        EventMgt.find(function(err, event) {
            if (err) {
                return console.log(err);
            }else{
                console.log(event);
            }
        });
        // return res.view('pages/homepage.ejs');
        // var message = EventMgt.getInvalidIdMsg(req.params);

        // if (message) return res.badRequest(message);

        // var model = await EventMgt.findOne(req.params.id);

        // if (!model) return res.notFound();

        // return res.view('pages/homepage.ejs', { EventMgt: model });

    },
    search: async function (req, res) {

        return res.view('pages/search.ejs');

    },
    create: async function (req, res) {


        if (req.method == "GET")
            return res.view('pages/create.ejs');

        if (typeof req.body.EventMgt === "undefined")
            return res.badRequest("Form-data not received.");

        await EventMgt.create(req.body.EventMgt);

        return res.ok("Successfully created!");
        // return res.view('pages/create.ejs');

    },
    detail: async function (req, res) {

        return res.view('pages/detail.ejs');

    },
    admin: async function (req, res) {

        return res.view('pages/admin.ejs');

    },

};

