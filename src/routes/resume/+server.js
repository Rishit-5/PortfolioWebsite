import supabase from "$lib/db.js";

export async function GET() {
    const { data, error } = await supabase
        .storage
        .from('resume')
        .download('Rishi_Patil_Resume.pdf');

    if (error) {
        return new Response('Error fetching resume', { status: 500 });
    }

    return new Response(data, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename="rishit_patil_resume.pdf"'
        }
    });
}