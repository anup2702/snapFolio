import domToPdf from "dom-to-pdf";
import { toast } from "react-toastify"

const ExportPDFButton = () => {
  const handleExportPDF = () => {
    console.log('click')
    const element = document.getElementById("preview");
    const options = {
      filename: "portfolio.pdf",
      overrideWidth: 800,
      excludeClassNames: ["no-print"],
    };

    domToPdf(element, options, () => {
      toast.success("PDF downloaded!");
    });
  };

  return (
    <div >
  <button onClick={handleExportPDF} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
    Download PDF
  </button>
</div>
  );
};

export default ExportPDFButton;
