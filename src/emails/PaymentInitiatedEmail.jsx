const RegistrationEmailTemplate = (data) => {
  const isAdmin = data.recipient === "admin"
  const currencySymbol = data.currency === "USD" ? "$" : "€"

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${isAdmin ? "New Conference Registration" : "Your Conference Registration Payment Initiated"}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc;
            margin: 0;
            padding: 0;
            color: #374151;
            line-height: 1.6;
          }
          
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 0;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          }
          
          .header {
            background: linear-gradient(135deg, #ec4899, #f97316, #eab308);
            padding: 40px 30px;
            text-align: center;
          }
          
          .header-title {
            color: white;
            font-size: 28px;
            font-weight: 700;
            margin: 0;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          
          .content {
            padding: 40px 30px;
          }
          
          .badge {
            display: inline-block;
            background: linear-gradient(135deg, #ec4899, #f97316);
            color: white;
            font-size: 12px;
            font-weight: 600;
            padding: 8px 16px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 25px;
          }
          
          .intro-text {
            font-size: 16px;
            color: #4b5563;
            margin-bottom: 35px;
            line-height: 1.7;
          }
          
          .detail-grid {
            display: grid;
            gap: 25px;
          }
          
          .detail-item {
            display: flex;
            align-items: flex-start;
            gap: 20px;
          }
          
          .detail-label {
            font-weight: 600;
            color: #374151;
            min-width: 120px;
            font-size: 14px;
          }
          
          .detail-value {
            color: #1f2937;
            font-size: 14px;
            flex: 1;
          }
          
          .highlight-amount {
            background: linear-gradient(135deg, #ec4899, #f97316, #eab308);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
            font-size: 16px;
          }
          
          .section-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
            margin: 30px 0;
          }
          
          .conference-info {
            background: linear-gradient(135deg, #fef7f7, #fef3f2, #fffbeb);
            padding: 25px;
            border-radius: 12px;
            margin-top: 30px;
            border-left: 4px solid;
            border-image: linear-gradient(135deg, #ec4899, #f97316, #eab308) 1;
          }
          
          .conference-info p {
            margin: 0;
            color: #374151;
            font-size: 14px;
          }
          
          .footer {
            background-color: #f9fafb;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 13px;
          }
          
          .footer a {
            color: #ec4899;
            text-decoration: none;
          }
          
          .footer a:hover {
            text-decoration: underline;
          }
          
          .next-steps {
            margin-top: 30px;
          }
          
          .next-steps h3 {
            color: #374151;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
          }
          
          .next-steps ul {
            padding-left: 20px;
            color: #4b5563;
          }
          
          .next-steps li {
            margin-bottom: 8px;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div style="font-size: 16px; font-weight: 600; margin-bottom: 10px; background: linear-gradient(135deg, #ffffff, #f8fafc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">ICETMR 2025</div>
            <h1 class="header-title">
              ${isAdmin ? "New Conference Registration" : "Conference Registration Payment"}
            </h1>
          </div>
          
          <div class="content">
            <div class="badge">
              ${isAdmin ? "NEW REGISTRATION" : "PAYMENT INITIATED"}
            </div>
            
            <div class="intro-text">
              ${
                isAdmin
                  ? "A new participant has registered for the International Conference on Emerging Trends in Multidisciplinary Research:"
                  : "Your registration payment for the International Conference on Emerging Trends in Multidisciplinary Research 2025 has been initiated. Please note that your registration is not complete until payment is confirmed."
              }
            </div>
            
            <div class="detail-grid">
              ${
                isAdmin
                  ? `
              <div class="detail-item">
                <div class="detail-label">Name</div>
                <div class="detail-value">${data.billing_name}</div>
              </div>
              
              <div class="detail-item">
                <div class="detail-label">Email</div>
                <div class="detail-value">${data.billing_email}</div>
              </div>
              
              <div class="detail-item">
                <div class="detail-label">Phone</div>
                <div class="detail-value">${data.billing_tel}</div>
              </div>
              
              <div class="detail-item">
                <div class="detail-label">Organization</div>
                <div class="detail-value">${data.billing_organization || "Not provided"}</div>
              </div>
              
              <div class="detail-item">
                <div class="detail-label">Designation</div>
                <div class="detail-value">${data.billing_designation || "Not provided"}</div>
              </div>
              
              <div class="detail-item">
                <div class="detail-label">Address</div>
                <div class="detail-value">${data.billing_address}, ${data.billing_city}, ${data.billing_state}, ${data.billing_zip}, ${data.billing_country}</div>
              </div>
              
              <div class="section-divider"></div>
              `
                  : ""
              }
              
              <div class="detail-item">
                <div class="detail-label">Registration Type</div>
                <div class="detail-value">${data.ticket_category} - ${data.ticket_name}</div>
              </div>
              
              <div class="detail-item">
                <div class="detail-label">Order ID</div>
                <div class="detail-value">${data.order_id}</div>
              </div>
              
              <div class="detail-item">
                <div class="detail-label">Amount</div>
                <div class="detail-value highlight-amount">${currencySymbol}${data.amount}</div>
              </div>
            </div>
            
            <div class="conference-info">
              <p><strong>International Conference on Emerging Trends in Multidisciplinary Research (ICETMR)</strong><br>
              October 10th - 11th, 2025 • Bali, Indonesia</p>
            </div>
            
            ${
              !isAdmin
                ? `
            <div class="next-steps">
              <h3>What's Next?</h3>
              <p style="margin-bottom: 15px; color: #4b5563; font-size: 14px;">Once your payment is confirmed, you will receive:</p>
              <ul>
                <li>Official confirmation of your registration</li>
                <li>Conference venue details and accommodation information</li>
                <li>Preliminary conference program and schedule</li>
                <li>Information about keynote speakers and special sessions</li>
                <li>Networking event details and cultural activities in Bali</li>
              </ul>
            </div>
            `
                : ""
            }
          </div>
          
          <div class="footer">
            <p>© ${new Date().getFullYear()} International Conference on Emerging Trends in Multidisciplinary Research</p>
            <p>For any questions, please contact <a href="mailto:info@emergingtrendsconference.com">info@emergingtrendsconference.com</a></p>
          </div>
        </div>
      </body>
    </html>
  `
}

export default RegistrationEmailTemplate