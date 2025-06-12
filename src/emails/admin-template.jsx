export const adminEmailTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #ffffff;
            margin: 0;
            padding: 0;
            color: #374151;
        }
        
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
        }
        
        .main-container {
            padding: 32px;
            background-color: #ffffff;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            border: 1px solid #f3f4f6;
            position: relative;
            overflow: hidden;
        }
        
        .main-container::before {
            content: "";
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #ec4899, #ef4444, #eab308, #fbbf24);
            border-radius: 16px;
            z-index: -1;
            filter: blur(12px);
            opacity: 0.3;
        }
        
        .gradient-border {
            box-shadow: 0 0 15px rgba(236, 72, 153, 0.2), 0 0 30px rgba(239, 68, 68, 0.15), 0 0 45px rgba(234, 179, 8, 0.1);
        }
        
        .header {
            text-align: center;
            margin-bottom: 32px;
        }
        
        .header h1 {
            font-size: 24px;
            font-weight: 700;
            margin: 0;
            background: linear-gradient(to bottom left, #ec4899, #ef4444, #eab308);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
        }
        
        .divider {
            border: none;
            border-top: 1px solid #e5e7eb;
            margin: 24px 0;
        }
        
        .intro-text {
            font-size: 18px;
            font-weight: 500;
            background: linear-gradient(to bottom left, #ec4899, #ef4444, #eab308);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            margin-bottom: 24px;
        }
        
        .submission-details {
            margin-top: 24px;
            padding: 24px;
            background-color: #f9fafb;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
        }
        
        .detail-item {
            margin-bottom: 20px;
            padding: 16px;
            background-color: #ffffff;
            border-radius: 8px;
            border-left: 4px solid;
        }
        
        .detail-item:last-child {
            margin-bottom: 0;
        }
        
        .detail-item.name {
            border-left-color: #ec4899;
        }
        
        .detail-item.email {
            border-left-color: #ef4444;
        }
        
        .detail-item.phone {
            border-left-color: #eab308;
        }
        
        .detail-item.subject {
            border-left-color: #ec4899;
        }
        
        .detail-item.message {
            border-left-color: #ef4444;
        }
        
        .detail-label {
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 4px;
            color: #6b7280;
        }
        
        .detail-label.name {
            color: #ec4899;
        }
        
        .detail-label.email {
            color: #ef4444;
        }
        
        .detail-label.phone {
            color: #eab308;
        }
        
        .detail-label.subject {
            color: #ec4899;
        }
        
        .detail-label.message {
            color: #ef4444;
        }
        
        .detail-value {
            font-size: 16px;
            font-weight: 500;
            color: #374151;
            margin: 0;
        }
        
        .message-content {
            padding: 16px;
            background-color: #f9fafb;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            font-size: 16px;
            font-weight: 500;
            color: #374151;
            line-height: 1.5;
            margin-top: 8px;
        }
        
        .footer {
            margin-top: 32px;
            text-align: center;
        }
        
        .footer-box {
            padding: 16px;
            background-color: #f9fafb;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            margin-bottom: 24px;
        }
        
        .footer-text {
            font-size: 14px;
            background: linear-gradient(to bottom left, #ec4899, #ef4444, #eab308);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            font-weight: 500;
            margin: 0;
        }
        
        .copyright {
            font-size: 14px;
            background: linear-gradient(to bottom left, #ec4899, #ef4444, #eab308);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            margin: 0;
        }
        
        @media only screen and (max-width: 600px) {
            .container {
                margin: 20px auto;
            }
            
            .main-container {
                padding: 24px;
                border-radius: 12px;
            }
            
            .header h1 {
                font-size: 20px;
            }
            
            .intro-text {
                font-size: 16px;
            }
            
            .submission-details {
                padding: 20px;
            }
            
            .detail-item {
                padding: 12px;
            }
            
            .detail-value {
                font-size: 14px;
            }
            
            .message-content {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="main-container gradient-border">
            <!-- Header -->
            <div class="header">
                <h1>NEW CONTACT FORM SUBMISSION</h1>
                <hr class="divider">
            </div>

            <!-- Intro text -->
            <p class="intro-text">
                You have received a new contact form submission:
            </p>

            <!-- Submission details -->
            <div class="submission-details">
                <!-- Name -->
                <div class="detail-item name">
                    <div class="detail-label name">Name:</div>
                    <div class="detail-value">${data.name}</div>
                </div>

                <!-- Email -->
                <div class="detail-item email">
                    <div class="detail-label email">Email:</div>
                    <div class="detail-value">${data.email}</div>
                </div>

                <!-- Phone Number (if provided) -->
                ${data.phoneNumber ? `
                <div class="detail-item phone">
                    <div class="detail-label phone">Phone Number:</div>
                    <div class="detail-value">${data.phoneNumber}</div>
                </div>
                ` : ''}

                <!-- Subject -->
                <div class="detail-item subject">
                    <div class="detail-label subject">Subject:</div>
                    <div class="detail-value">${data.subject}</div>
                </div>

                <!-- Message -->
                <div class="detail-item message">
                    <div class="detail-label message">Message:</div>
                    <div class="message-content">${data.message}</div>
                </div>
            </div>

            <!-- Footer -->
            <div class="footer">
                <div class="footer-box">
                    <p class="footer-text">RESPOND PROMPTLY TO MAINTAIN ENGAGEMENT</p>
                </div>
                <hr class="divider">
                <p class="copyright">
                    © 2025 International Conference on Emerging Trends in Multidisciplinary Research
                </p>
            </div>
        </div>
    </div>
</body>
</html>
`;