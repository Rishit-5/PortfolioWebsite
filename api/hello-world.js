import supabase from "$lib/db.js";

module.exports = (req, res) => {
    let { data, error } = supabase.from('experience').select('*').order('priority', { ascending: true })
    res.send({
        status: 200,
        message: "Hello world!!",
    });
};