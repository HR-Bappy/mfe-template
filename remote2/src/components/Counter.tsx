import React from "react";

const DownloadWordButton: React.FC = () => {
	const downloadWordFile = () => {
		const htmlContent = `
      <header style="background-color: #4CAF50; color: white; text-align: center; padding: 1em 0;">
          <h1>Page Header</h1>
      </header>
      <main style="margin: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
              <thead>
                  <tr>
                      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Name</th>
                      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Phone</th>
                      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Email</th>
                      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Address</th>
                  </tr>
              </thead>
              <tbody>
                  <tr style="background-color: #f2f2f2;">
                      <td style="border: 1px solid #ddd; padding: 8px;">John Doe</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">123-456-7890</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">john@example.com</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">123 Elm St.</td>
                  </tr>
                  <!-- Additional rows can be added here -->
              </tbody>
          </table>
      </main>
      <footer style="background-color: #4CAF50; color: white; text-align: center; padding: 1em 0;">
          <p>Page Footer</p>
      </footer>
    `;

		const docContent = `
      <!DOCTYPE html>
      <html xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:o="urn:schemas-microsoft-com:office:office"
            xmlns:w="urn:schemas-microsoft-com:office:word"
            xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
            xmlns="http://www.w3.org/TR/REC-html40">
      <head><meta charset="utf-8"><title>Document</title></head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `;

		const blob = new Blob(["\ufeff", docContent], {
			type: "application/msword",
		});

		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = "TableWithHeaderAndFooter.doc";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return <button onClick={downloadWordFile}>Download Word Document</button>;
};

export default DownloadWordButton;
