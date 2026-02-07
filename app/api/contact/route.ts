import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      service,
      fullName,
      email,
      phone,
      age,
      height,
      weight,
      currentGoals,
      primaryGoal90Days,
      startDate,
      cooperationLength,
    } = body

    const { data, error } = await resend.emails.send({
      from: 'Libor Kverek Web <onboarding@resend.dev>',
      to: ['kverekl@gmail.com'],
      subject: `Nová poptávka: ${service} - ${fullName}`,
      html: `
        <h2>Nová poptávka z webu</h2>
        <hr />
        <p><strong>Služba:</strong> ${service}</p>
        <p><strong>Jméno:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Věk:</strong> ${age || 'Nevyplněno'}</p>
        <p><strong>Výška:</strong> ${height || 'Nevyplněno'}</p>
        <p><strong>Hmotnost:</strong> ${weight || 'Nevyplněno'}</p>
        <hr />
        <p><strong>Aktuální cíle:</strong> ${currentGoals || 'Nevyplněno'}</p>
        <p><strong>Primární cíl (90 dní):</strong></p>
        <p>${primaryGoal90Days || 'Nevyplněno'}</p>
        <hr />
        <p><strong>Kdy chce začít:</strong> ${startDate || 'Nevyplněno'}</p>
        <p><strong>Délka spolupráce:</strong> ${cooperationLength || 'Nevyplněno'}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Chyba při odesílání emailu' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Chyba serveru' }, { status: 500 })
  }
}
