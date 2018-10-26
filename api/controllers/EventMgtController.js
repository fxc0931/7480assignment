/**
 * EventMgtController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    index: async function (req, res) {

        return res.view('pages/homepage.ejs');

    },
    search: async function (req, res) {

        return res.view('pages/search.ejs');

    },
    create: async function (req, res) {

        return res.view('pages/create.ejs');

    },
    detail: async function (req, res) {

        return res.view('pages/detail.ejs');

    },
    admin: async function (req, res) {

        return res.view('pages/admin.ejs');

    },

};

