import { createClient } from '@supabase/supabase-js'

module.exports = (req, res) => {
    const supabase = createClient(
        process.env.VITE_SUPABASE_URL,
        process.env.VITE_SUPABASE_ANON_KEY
    )
    let { data, error } = supabase.from('experience').select('*').order('priority', { ascending: true })
    res.send({
        status: 200,
        message: "Hello world!!",
    });
};