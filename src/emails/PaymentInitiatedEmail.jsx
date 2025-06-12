const RegistrationEmailTemplate = (data) => {
  const isAdmin = data.recipient === "admin"
  const currencySymbol = data.currency === "USD" ? "$" : "€"

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${isAdmin ? "New Registration Payment Initiated" : "Your Conference Registration Payment Initiated"}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: #fafafa;
            margin: 0;
            padding: 0;
            color: #374151;
          }
          
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          
          .logo {
            margin-bottom: 20px;
          }
          
          .conference-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 8px;
            background: linear-gradient(to bottom left, #ec4899, #ef4444, #eab308);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.3;
          }
          
          .conference-details {
            font-size: 14px;
            color: #6b7280;
            margin-bottom: 15px;
          }
          
          .title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 10px;
            color: #111827;
          }
          
          .card {
            background-color: #ffffff;
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 20px;
            border: 1px solid #e5e7eb;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            position: relative;
            overflow: hidden;
          }
          
          .card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(to right, #ec4899, #ef4444, #eab308);
          }
          
          .section-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #111827;
          }
          
          .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            padding-bottom: 12px;
            border-bottom: 1px solid #f3f4f6;
          }
          
          .detail-row:last-child {
            border-bottom: none;
          }
          
          .detail-label {
            color: #6b7280;
            font-weight: 500;
          }
          
          .detail-value {
            color: #111827;
            font-weight: 600;
          }
          
          .highlight {
            background: linear-gradient(135deg, #fef7f7, #fef3f2, #fffbeb);
            padding: 20px;
            border-radius: 12px;
            margin-top: 20px;
            border-left: 4px solid;
            border-image: linear-gradient(to bottom, #ec4899, #ef4444, #eab308) 1;
            color: #374151;
            position: relative;
          }
          
          .highlight::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 4px;
            background: linear-gradient(to bottom, #ec4899, #ef4444, #eab308);
          }
          
          .highlight p {
            color: #374151;
            margin: 0;
            line-height: 1.6;
          }
          
          .button {
            display: inline-block;
            background: linear-gradient(to bottom left, #ec4899, #ef4444, #eab308);
            color: white;
            font-weight: bold;
            padding: 14px 28px;
            border-radius: 50px;
            text-decoration: none;
            margin-top: 20px;
            text-align: center;
            box-shadow: 0 4px 14px 0 rgba(236, 72, 153, 0.3);
            transition: all 0.2s ease;
          }
          
          .button:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 20px 0 rgba(236, 72, 153, 0.4);
          }
          
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 14px;
          }
          
          .grid-pattern {
            background-image: radial-gradient(rgba(156, 163, 175, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
          
          .card p, .card li {
            color: #374151;
            line-height: 1.6;
          }
          
          ul {
            padding-left: 20px;
          }
          
          li {
            margin-bottom: 8px;
          }
          
          a {
            color: #ec4899;
            text-decoration: none;
            font-weight: 500;
          }
          
          a:hover {
            text-decoration: underline;
          }
          
          .amount-highlight {
            background: linear-gradient(to bottom left, #ec4899, #ef4444, #eab308);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
          }
        </style>
      </head>
      <body class="grid-pattern">
        <div class="container">
          <div class="header">
            <div class="logo">
              <div style="width: 180px; height: 60px; margin: 0 auto; background: linear-gradient(to bottom left, #ec4899, #ef4444, #eab308); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px;">
                ICETMR 2025
              </div>
            </div>
            <div class="conference-title">
              International Conference on Emerging Trends in Multidisciplinary Research
            </div>
            <div class="conference-details">
              October 10th - 11th, 2025 • Bali, Indonesia
            </div>
            <div class="title">
              ${isAdmin ? "New Registration Payment Initiated" : "Your Registration Payment Initiated"}
            </div>
          </div>
          
          <div class="card">
            <div class="section-title">Registration Payment Details</div>
            
            <div class="detail-row">
              <span class="detail-label">Registration Type:</span>
              <span class="detail-value">${data.ticket_category} - ${data.ticket_name}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Order ID:</span>
              <span class="detail-value">${data.order_id}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Amount:</span>
              <span class="detail-value amount-highlight">${currencySymbol}${data.amount}</span>
            </div>
            
            ${
              isAdmin
                ? `
            <div class="section-title" style="margin-top: 20px;">Registrant Information</div>
            
            <div class="detail-row">
              <span class="detail-label">Name:</span>
              <span class="detail-value">${data.billing_name}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span class="detail-value">${data.billing_email}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span class="detail-value">${data.billing_tel}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Organization:</span>
              <span class="detail-value">${data.billing_organization || "Not provided"}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Designation:</span>
              <span class="detail-value">${data.billing_designation || "Not provided"}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Address:</span>
              <span class="detail-value">${data.billing_address}, ${data.billing_city}, ${data.billing_state}, ${
                data.billing_zip
              }, ${data.billing_country}</span>
            </div>
            `
                : `
            <div class="highlight">
              <p>Your registration payment for the International Conference on Emerging Trends in Multidisciplinary Research 2025 has been initiated. Please note that your registration is not complete until payment is confirmed.</p>
            </div>
            `
            }
          </div>
          
          ${
            isAdmin
              ? `
          <div class="highlight">
            <p>This is a notification of a new registration payment initiated for the International Conference on Emerging Trends in Multidisciplinary Research, October 10th-11th, 2025, Bali, Indonesia.</p>
          </div>
          `
              : `
          <div class="card">
            <div class="section-title">Payment Status</div>
            <p>Your payment is currently being processed. You will receive a confirmation email once your payment is complete. If you do not receive a confirmation within 24 hours, please contact our support team.</p>
            
            <div class="section-title" style="margin-top: 20px;">About the Conference</div>
            <p>The <strong>International Conference on Emerging Trends in Multidisciplinary Research (ICETMR)</strong> brings together researchers, academics, and industry professionals to explore cutting-edge developments across multiple disciplines and foster interdisciplinary collaboration.</p>
            
            <div class="highlight">
              <p>The conference will take place on <strong>October 10th-11th, 2025</strong> in the beautiful setting of <strong>Bali, Indonesia</strong>.</p>
            </div>
            
            <div class="section-title" style="margin-top: 20px;">What's Next?</div>
            <p>Once your payment is confirmed, you will receive:</p>
            <ul>
              <li>Official confirmation of your registration</li>
              <li>Conference venue details and accommodation information</li>
              <li>Preliminary conference program and schedule</li>
              <li>Information about keynote speakers and special sessions</li>
              <li>Networking event details and cultural activities in Bali</li>
            </ul>
          </div>
          `
          }
          
          <div class="footer">
            <p>© ${new Date().getFullYear()} International Conference on Emerging Trends in Multidisciplinary Research</p>
            <p>For any questions, please contact <a href="mailto:info@emergingtrendsconference.com">info@emergingtrendsconference.com</a></p>
            <p>Conference Venue: Bali, Indonesia</p>
          </div>
        </div>
      </body>
    </html>
  `
}

export default RegistrationEmailTemplate
