
function downloadTableAsJSON() {
  const table = document.querySelector("table");
  const rows = Array.from(table.querySelectorAll("tbody tr"));
  const data = rows.map(row => {
    const cells = row.querySelectorAll("td");
    return {
      Name: cells[0].innerText,
      Area: cells[1].innerText,
      Level: cells[2].innerText
    };
  });

  // Convert data to JSON and create a downloadable file
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  // Create a temporary download link
  const a = document.createElement("a");
  a.href = url;
  a.download = "employees.json";
  document.body.appendChild(a);
  a.click();

  // Clean up by revoking the object URL and removing the link
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
}