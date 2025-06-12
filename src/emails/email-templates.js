export function getUserEmailTemplate(data) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Paper Submission Confirmation</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #374151;
        background-color: #ffffff;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #ec4899 0%, #ef4444 50%, #eab308 100%);
        color: #ffffff;
        padding: 25px;
        text-align: center;
        border-radius: 15px 15px 0 0;
        border: 1px solid #f3f4f6;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      .content {
        padding: 25px;
        border: 1px solid #f3f4f6;
        border-top: none;
        border-radius: 0 0 15px 15px;
        background-color: #ffffff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        color: #374151;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #9ca3af;
      }
      h1 {
        color: #374151;
        margin-top: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .conference-title {
        font-size: 24px;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 5px;
        line-height: 1.2;
      }
      .subtitle {
        color: #ffffff;
        font-size: 16px;
        margin-top: 5px;
        margin-bottom: 8px;
        font-weight: 300;
      }
      .event-details {
        color: #ffffff;
        font-size: 14px;
        margin-top: 10px;
        opacity: 0.95;
      }
      .highlight {
        font-weight: bold;
        background: linear-gradient(135deg, #ec4899 0%, #ef4444 50%, #eab308 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      ul {
        list-style-type: none;
        padding-left: 0;
      }
      li {
        padding: 8px 0;
        border-bottom: 1px solid #f3f4f6;
      }
      li:last-child {
        border-bottom: none;
      }
      li strong {
        background: linear-gradient(135deg, #ec4899 0%, #ef4444 50%, #eab308 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: bold;
        margin-right: 5px;
        display: inline-block;
        min-width: 120px;
      }
      a {
        background: linear-gradient(135deg, #ec4899 0%, #ef4444 50%, #eab308 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      .button {
        display: inline-block;
        padding: 10px 20px;
        border: 1px solid transparent;
        border-radius: 30px;
        background: linear-gradient(135deg, #ec4899 0%, #ef4444 50%, #eab308 100%);
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 15px;
        transition: all 0.3s ease;
        text-align: center;
      }
      .button:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      .detail-label {
        background: linear-gradient(135deg, #ec4899 0%, #ef4444 50%, #eab308 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: bold;
        margin-right: 5px;
        display: inline-block;
        min-width: 150px;
      }
      .detail-value {
        color: #374151;
      }
      .contact-info {
        background-color: #f9fafb;
        padding: 15px;
        border-radius: 8px;
        margin: 15px 0;
        border-left: 4px solid;
        border-image: linear-gradient(135deg, #ec4899 0%, #ef4444 50%, #eab308 100%) 1;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="conference-title">International Conference on Emerging Trends in Multidisciplinary Research</div>
      <div class="event-details">October 10th - 11th, 2025 | Bali, Indonesia</div>
    </div>
    <div class="content">
      <p>Dear ${data.author},</p>
      
      <p>Thank you for submitting your paper titled <span class="highlight">"${data.paper_title}"</span> to the International Conference on Emerging Trends in Multidisciplinary Research.</p>
      
      <p>We have received your submission and our review committee will evaluate it shortly. You will be notified about the status of your submission in the coming weeks.</p>
      
      <p>Here's a summary of your submission:</p>
      <ul>
        <li><span class="detail-label">Paper Title:</span> <span class="detail-value">${data.paper_title}</span></li>
        <li><span class="detail-label">Paper Type:</span> <span class="detail-value">${data.paper_type}</span></li>
        <li><span class="detail-label">Presentation Type:</span> <span class="detail-value">${data.presentation_type}</span></li>
        <li><span class="detail-label">Submission Date:</span> <span class="detail-value">${new Date().toLocaleDateString()}</span></li>
      </ul>
      
      <div class="contact-info">
        <p><strong>Conference Contact Information:</strong></p>
        <p>📧 Email: <a href="mailto:info@emergingtrendsconference.com">info@emergingtrendsconference.com</a><br>
        📞 Phone: <a href="tel:+917848854815">+91 78488 54815</a></p>
      </div>
      
      <p>If you have any questions or need to make changes to your submission, please don't hesitate to contact us using the information above.</p>
      
      <p>Best regards,<br>
      Conference Organizing Committee<br>
      International Conference on Emerging Trends in Multidisciplinary Research</p>
    </div>
    <div class="footer">
      <p>© 2025 International Conference on Emerging Trends in Multidisciplinary Research. All rights reserved.</p>
    </div>
  </body>
  </html>
  `
}

export function getAdminEmailTemplate(data, fileUrl) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>New Paper Submission</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #374151;
        background-color: #ffffff;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #ec4899 0%, #ef4444 50%, #eab308 100%);
        color: #ffffff;
        padding: 25px;
        text-align: center;
        border-radius: 15px 15px 0 0;
        border: 1px solid #f3f4f6;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      .content {
        padding: 25px;
        border: 1px solid #f3f4f6;
        border-top: none;
        border-radius: 0 0 15px 15px;
        background-color: #ffffff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #9ca3af;
      }
      h1, h2 {
        color: #374151;
        margin-top: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .conference-title {
        font-size: 24px;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 5px;
        line-height: 1.2;
      }
      .subtitle {
        color: #ffffff;
        font-size: 16px;
        margin-top: 5px;
        font-weight: 300;
      }
      table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        margin: 20px 0;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      }
      table, th, td {
        border: 1px solid #f3f4f6;
      }
      th, td {
        padding: 12px 15px;
        text-align: left;
      }
      th {
        background-color: #f9fafb;
        color: #374151;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: bold;
      }
      td {
        color: #374151;
      }
      tr:nth-child(even) {
        background-color: #f9fafb;
      }
      tr:nth-child(odd) {
        background-color: #ffffff;
      }
      tr:hover {
        background-color: #f3f4f6;
      }
      .file-link {
        background: linear-gradient(135deg, #ec4899 0%, #ef4444 50%, #eab308 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-decoration: none;
        display: inline-block;
        padding: 5px 10px;
        border: 1px solid #f3f4f6;
        border-radius: 5px;
        transition: all 0.3s ease;
        background-color: #f9fafb;
      }
      .file-link:hover {
        background-color: #f3f4f6;
        transform: translateY(-1px);
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);
      }
      .action-buttons {
        text-align: center;
        margin-top: 20px;
      }
      .action-button {
        display: inline-block;
        padding: 10px 20px;
        margin: 0 10px;
        border: 1px solid transparent;
        border-radius: 30px;
        background: linear-gradient(135deg, #ec4899 0%, #ef4444 50%, #eab308 100%);
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        text-decoration: none;
      }
      .action-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      .action-button.reject {
        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        color: #ffffff;
      }
      .action-button.reject:hover {
        background: linear-gradient(135deg, #b91c1c 0%, #991b1b 100%);
      }
      .conference-info {
        background-color: #f9fafb;
        padding: 15px;
        border-radius: 8px;
        margin: 15px 0;
        border-left: 4px solid;
        border-image: linear-gradient(135deg, #ec4899 0%, #ef4444 50%, #eab308 100%) 1;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="conference-title">International Conference on Emerging Trends in Multidisciplinary Research</div>
      <div class="subtitle">New Paper Submission Alert</div>
    </div>
    <div class="content">
      <p>A new paper has been submitted to the International Conference on Emerging Trends in Multidisciplinary Research.</p>
      
      <div class="conference-info">
        <p><strong>Conference Details:</strong></p>
        <p>📅 October 10th - 11th, 2025<br>
        📍 Bali, Indonesia<br>
        📧 info@emergingtrendsconference.com<br>
        📞 +91 78488 54815</p>
      </div>
      
      <h2>Submission Details:</h2>
      <table>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Author</td>
          <td>${data.author}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>${data.email}</td>
        </tr>
        <tr>
          <td>Phone Number</td>
          <td>${data.phone_number}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>${data.country}</td>
        </tr>
        <tr>
          <td>Co-Author</td>
          <td>${data.co_author}</td>
        </tr>
        <tr>
          <td>Paper Title</td>
          <td>${data.paper_title}</td>
        </tr>
        <tr>
          <td>Department</td>
          <td>${data.department}</td>
        </tr>
        <tr>
          <td>Organization</td>
          <td>${data.organization}</td>
        </tr>
        <tr>
          <td>Paper Type</td>
          <td>${data.paper_type}</td>
        </tr>
        <tr>
          <td>Presentation Type</td>
          <td>${data.presentation_type}</td>
        </tr>
        <tr>
          <td>Message</td>
          <td>${data.message}</td>
        </tr>
        <tr>
          <td>How they heard about us</td>
          <td>${data.know_to_you}</td>
        </tr>
        <tr>
          <td>Submission Date</td>
          <td>${new Date().toLocaleDateString()}</td>
        </tr>
        ${
          fileUrl
            ? `
        <tr>
          <td>Uploaded File</td>
          <td><a href="${fileUrl}" class="file-link">View/Download File</a></td>
        </tr>
        `
            : ""
        }
      </table>
      
      <p>Please review this submission at your earliest convenience.</p>
    </div>
    <div class="footer">
      <p>© 2025 International Conference on Emerging Trends in Multidisciplinary Research. All rights reserved.</p>
    </div>
  </body>
  </html>
  `
}