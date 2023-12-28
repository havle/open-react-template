import { NextRequest, NextResponse } from 'next/server';
import emailjs from 'emailjs-com';

export async function POST(req: NextRequest) {
    const { from_name, phone_number,restaurant } = await req.json();
    emailjs.init("Y_PSO_InvSgCPh4BB");
    var templateParams = {
        from_name: from_name,
        phone_number: phone_number,
        restaurant: restaurant
    };
    try {
      const result = await emailjs.send('service-tara', 'template_l3tr7fy', templateParams);
      return NextResponse.json({ success: true, message: result.text});
    } catch (err) {
        console.log(err);
        return NextResponse.json({ success: false, message: 'An error has occured' });
    }
}
