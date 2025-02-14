import React, { useState } from "react";

const UploadLecture = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "",
    category: "",
    className: "",
    section: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://localhost:4000/api/admin/create-lecture",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Lecture created successfully:", data);
      alert("Lecture created successfully!");
    } catch (error) {
      console.error("Error creating lecture:", error);
      alert("Failed to create lecture. Please try again.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 flex w-3/4">
        <div className="w-1/2 pr-8">
          <h2 className="text-2xl font-bold mb-6">Upload Lecture</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter title"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter description"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter subject"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter category"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Class</label>
              <input
                type="text"
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter class"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Section</label>
              <input
                type="text"
                name="section"
                value={formData.section}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter section"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFhUVGBcYFxYXFhcYFxYYFhcYFxsVFRYYHSggGBolHRgaIjEhJSkrLi4uGR8zODMtNygtLisBCgoKDg0OGxAQGy0lHyYrLS0tLS0vLy0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYHAf/EAEwQAAIBAgMCCQcIBwgBBAMAAAECAwARBBIhBTEGEyJBUWFxgZEHMlKSobHRFBYjM1NywdIVQmJzgpOyNFRjosLD8PHhQ1WUsyREg//EABsBAAIDAQEBAAAAAAAAAAAAAAAEAgMFAQYH/8QAPBEAAgEDAQQIBAQGAgIDAQAAAAECAwQREgUhMVETFBVBUmFxkTIzgaEiscHwIzRCU9HhYvEkgnKSogb/2gAMAwEAAhEDEQA/AO1VSWBQB6ptXU8HGsjwq0gFABQAUAFABQAUAFABQAUAFACXNRk8HUhqqyYUAFAEI4/6TJlOW31n6vutbmveq9f4sYLui/Bqzv5d5NqwpCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAFI1qlF4ONDtWEAoAKACgAoAKACgAoAKACgBuSq5koiKiSESSAb+4c57BXGzqWRGQt52g9H8x5+zd21zGeJ3OOA6BXSI1xZXzd3o838PR7qMciWc8RccgPaN4O8dtCZxrAuunAoAKACgAoAKACgAoAKACgAoAh7T2lHAuaQ79FUasx6FHPUJzUVvLaVGVV4j/pFeMTjpBmSGKFf8YszkdOVN3Yah/FlvSSXmXabaG5ycn5cPdnqptEi4OEIPPaUeyu6a3kGbT/AJfYkybXXeiM6+ndUQ9jORm7VuKkpZ+FZKJQUfjkl+ZNgmDAHS5FyLgkdWlSTyiElpeGO104FACkapRlg40O1YQCgAoAKACgAoAKACgAoAg4/aEUVjLKkd92dlW9t9rnWqnxJogPwjwt7LioO0ypYe3U1HeTUe9hHtzBjX5XATzkyx39+g6qEgeWL+cOE/vUH81PjXTmGHzhwn96g/mp8aAww+cOE/vUH81PjQGGJk25gz/+3ACNxE0dx7fZXMAsoSvCPCg2bFQdREqWPbroaN/ed096J2D2hDNfipY5Mtr5HVrXva9jpuPhXSJJoAKACgAoAKACgAoAKAPCbamuAUPB+Hj5DjJFJzFlhBtaONTa9j+sxvr8aroR1PpH9PJDlzLoo9BH/wBvN/6NBIoVWsLaMdOk3N/GmXuTEYvMlkVAeSvYPdXVwOS4swGHhadjJI2Ybt+vYBzCitVVNaY8RGxs5XUukqvK++f8EraUTHKyA5gdCDYiqLeaWdXA0dqW86ii6a3ovdhbQaRSkn1iWv1g7m0qySXGPAXoTnvp1PiRa1EYCgBcbc1Ti+4i0OVMiFABQAUAFABQAUAFAHPfKigZsGpFwZWBHSDk0pS4k40pSXHDGrdJzSYzHwOw5VGKnlKG5MMjgX5sym16z7e2u61KNTpsZWeH+y2vd0KU3B084/fITiuCMCRtIEvlKizRSJfMbaFjrVd3Ru7ek6jrZ+n+ydtcUa89Cp49SuGw4TuhB9b41lK+u3wkzRdCiuKR7+gYfsPY1d67ec5ezOdDQ8g/QMP2I8GoV7eZ+Jh0NDkidLwPhUlW+TAjeDLYjtBrU6rtPxr3/wBGe7yyTw1+/cYxXBmGMBikTBiQCjFhcWuD40pdSvrZJ1J8eQzbytrjOhcCd5Mows2NVRYBogB0D6Sty1m50YylxaM+5SjUaRvqYKAoAKACgAoAj4/GpBG0srBUQXJ/ADnJOgHPQBzXaXlPlLH5PCipzGS7MeshSAvZr213BNQJWxfKaSwXFRKFOnGR35PWyEm47D3GjAOBvNpteCQqb3jcqRz3U2Iqufws7Sx0kc80J4Mf2WC1rcUm7fe3Kv31O3+XH0O3nzpZ45ZZyLcEdIIq1rKF08PJFjmdQFMTEgAXUqQbc4uQfZUFJrdgscYt5yZTDwJFmYMTYa6g2t1Dnqmc51Gk0Tt7ejaKc4ybXeQYNokOWa9jzX3dFqZnbpwSXEyaG1JRrynPOl93IuuDWK4yVzkAsu/n3iwNQdLQuI1SvVczf4Mef+TSVEYCgAoAeBq1MrPa6AUAFABQAUAFABQBz/yl+fgv3re+Okrr5E/Rjdt8xF/h8A8kULKEtxajlNIDz8yEDnqez3/4tP0QnfU3KvJrHHz/AEGtq4No8NJmC6mPzWkbc3PnJ6eaqNsP/wAV/T8y/ZcHGus/r+pH2bNlw62fLeRv/USO+i+mDeobE/lvqzu2JYqrf3c8Dny0/bn/AOVD+StfBkdI+f8A+l/gVJOWhl+kzWyf+qkluWOZFFqS2j8h/T80P7Olmtx++e40piU6lR4CmshpXIzfDJQBFYAatu/hrA278MPVmrstJOWPIpPJv9fjvvxf7lP2X8vD0F7r5r9Td00LhQAUAFABQBhfKjncYeBTZXMsjG4A+iVbZiSBblk93VXHLSsltGGqWCgh2FGqGHLcyLypMyllKkHkrYckNbd1XpV1W3q5GmreKWnn3mR2lheJlaPNmykC9rXuAd1z003CWqORCpDRJxOx+T2cybPgLa2Dp/CkjIB6oA7qGUS3Mc2HL8ml+SSMQt2aA/qurG+Qn0lPv7Kqoy0S6N/QauI9NDpo/wDt5Pn9TSo4O7mJHeNDTSYg00KrpwxGAwZVGBAZDudeUrAi28dm4661RWlqalFktn0XShUpVV/sq4ME8jWjjYi+mmgHWx0FOaklvZ5/oZTm1CLwbPYuzRAlibs2rHm7B1D40vOepmzbUFRj595KjxsbGyyISdwDKSewA1HS0WqrBvCaFpOpYqGUstiVBFxfdcc241HKzgtcWlloXeunB6PdVkeBCXEq9vbcXCBXkjcxk2LpY5Cd2ZSQbHpF/dU0slFasqSzJbifgsWkyLJGwZGFwR/zQ9Vce4shJSWVwH6CQUAFABQAUAc/8pfn4H963vjpK6+RP0Y3bfMQvA4XESLeIuVBto9gDYG1iR0ivMW1G6rQzSbwt3E1q1ShTlia3+g9LsnFWOYMRvN5ARpruzVdOxvXH8WcepXG6tk93H0Juxo3bDjIHPLa+UxjmXfxgPsrZ2J/LfVmVtaLdVY5eX6kn5LP0Tevh/yVsZRldHPz+3+BGOikWCUuHGiWzNEf1xuyKPbWftR4tZNeX5mhs2MlXWr9P0IOAxOMmvxchOW175Bv7uqsO2r39wm6cuHp/g161O1pNKa/MXi9l4yW3GWa27lLpfsrtey2hWS6TDx5o5TubWn8G4rPJwPp8f8Afj/3a2bNYoQT5CVy81Gzd0yLhQAUAFABQBnOF8SniiwF7uq35yQpK9dwpNuhTVFdNxyh2xklNp96KBcPe19Mu6zMTrqbtpp1Uo95qxTRUcI4o0WXReMlS+X9Y5bfSXOgCqM1hroSd1MUlJ48hO4lBZ8zecBoAmAwwHPGH75CXP8AVTTMp8Sz2hs+OdMki5hzdIPSp5jUZQUlhk6VWdOWqLK0bPxcYyxYlXXcFnTMQOguupqvTVjujL3L+loTeZww/wDi/wBGKSLaAAHGYYW0sEew7Na6nW5r2Bu15S90VcrYpmLfIcrHeySSIT94oRm76i6dV/0r3BV7dLGqT9Y5/Mfw+0MeqKpwubKAMxY3Nha566ko1ksYXuQlO0bbzL/6/wCyzi2i3FZp4njbXMACyjmBv4VdCEnx4iVerTjnTlrnjBk9jQZ5VQ35QYclip8xtzDdTFZZg0Y9hLTcRkhrZ22zHMI0jSFCcrBRd73ty5G5RIPZz1jRq4lhLB72paRlT1ybk+Pl9Ea7ZcpDkWJB39XWaZpt5My4itOSRtSTE2y4dB0lyV8FBPtNO00sbzHuJVeFNGT2zteX5PiIMSLkobXUBlYWK3toRz3q1RWcozZ3E9MqdTkVvBHHYiOHi4ifpHzKAASNLG19ADa9SklxZVRrVYrRA32x5cT5uIQdTgrfsYA+0VU8dxq0HW4VEW1RGQoAKACgDAeU4fSYL963+3Sd2v4M/RjVr8xFpsDCmSBgAptKTyiwHmL6JBpHYL/gy/8Al+iJbXg5VFjl/ksItmsl2KxgBW80yX1UjTMbVsVn/Dl6MzaFJxqJvH3KrZxHydb+m3PMOZfsvxrN2J/L/Vjm2Pmr08/0LHYxHGadB58Qf/s5Na7M2jjV/wB/qTOEn9mk/h/qFZm1P5Wf77zWsvnx/fcUvBjE8Wkrcneg5TBBubnNIbBX4Z+q/Iv2tLS4su8PtUOwX6PXomVj3KBrXoGtxkRrZeN3ujIeTr+0Y/78fvlpG2+VH995oV/jN1V5SFABQAUAFAGA4e4kytGYsThlSIMWzuxJZittERiLZdCCDyj3wVSD/DkYjRqxWvS/Ur9kcZJHmfECS5OsalVOtrXZFb2d9J1oJSwjWtajlTy+JWcMSA0eqKWRkztxhZV3HRbixDFScpNr0xbvKYneRSkmmbzgDir4WOJpYnZBZeLZjdP1bq6qykDTdzA1bqTeExGdOUfxNPDNNUis9Vb11LJxvA6FFWaURyQMmJ9OH1H/ADUb+RDS/F9v9hkxPpw+o/5qN/INL8X2/wBjWMw8zxsjyJYjXLGe3Ql/woU8PgV1KUpRa1bvT/ZkuDf9pj/i/oarqnwmVZ/OiROG+A4vEZwOTKM38Q0b8D/FWHcwxPPM+gbNra6Wl8V+Ro9lYpp4EYMALWfcBnXQlrbydD30zCTnFcjPqwjRqOLWX3ehosFOGXQ3toTa1+u1NwkmtxnVYOL3o59wq23FOSqoysudGJy2I1HMeY38aoV9GLxhltbYFSulOMkvcZ4M7ciwurozMFCgjLYW3nU89hRLaEX3M7bf/wA9UpNtzT9zpWFmDorgWDKGA+8L0zF5SYvKOmTjyHa6RCgAoAKAMF5UPrMD+9b3pSt78ifoxm0+YvUc2XicSiHiUJUkm+TNroN/dXmrOrd06f8ABjlN8s+Rq3ELec/4j3+pLfH40ggxtY6fVmmXdbRaw4/YoVG0Tzq+49sXFSwR5DhpW1JuARvt1dVXWNerbUtDpSe8hcwp1p6lNIfk4UhSQYWBG8Ei4qyW24RemVN5+hGOzpSWVJEPanCFZYmjEZGa2txzEH8KVu9rQr0ZU1FrPoXULCVOoptrcVGC2hJFfi2te19Ad3aOusy3vKtumqbxkcrW9OrjWiV+n8R6Y9VPhTPa114vsirs+h4Rryaf2jH/AH4v92vSWLzQi3yMq73VGjdB1LFbjMLXHPrz01+FvAviSWe4Vxdc0I5qPDHXNDO6hJU1zDO5KLhltDicM1vOkIjH8W8+F/EVRXliA5ZU9dVZ4Lectx63jYdXu1pGi8TRv3UdVGSN1FHhsFs7Dyz3zCJbIDYyO4z5QOm7G55hWpKjGTyzzlO5qRzGJz7ErJiZjNLYA2IVTyQo81FHMB7dTvNLVLiMY4jxNC3spykpT4cfUsYZChDIcrKbgjmI6KQTaeTYlCMo6Wtx1vYmNXEQpKOcajoYaEeNbFJqcVI8ncU3SqOD7iwq4oCgCiyR/wDuD/zIfy0tpj4/uhzVL+0vZhkj/wDcH/mQ/lo0x8b90GqX9pezE4ea0wjXEGZDE7G5jJBVkA1RQdzHfXE8TSTycqLNJyccb/Pkyn2DLAZ0CRuG1sS4IHJO8ZRzU7UzpPP2sqXSrSnn1LjhTsv5RBYFQyEMCxsBbzrnmFr+ApCtT1xwejs6/Q1M9z3FPwUhjAkhR3lzcouIyIUdeYMdSSDv6BVdCMcOKefyG72pPMakko43Yzva9C52UzLJYA23N1dZ7KspNqQvcqMoZz6EDhJHaa/pKD+H4VVcrExqwlmljkyLsuPNNGP2gfDX8KrpLM0i65lppSfkbetU88FABQAUAJWQEkA7tD4XqKkm2l3HWmjCeVD6zA/vW96Uve/In6MYtPmL1LHZpUwILxEgvcPM0ZFz+zv76S2RXpwtkpSSeX+Z3adCc62Yxz7/AKEvDPxZzL8nBtbXEufYVrT6zR8a90Z8bavF5UPzJuH2kc3LbDhelZrnwKj31zrFHxr3RdGlXz+KH5/4MlthwZ5CCCC2hGoNeNv5KVzNrhn9D0dqmqMUybs3ZiPGHMczklvMMYAsba5iK09n7Mo3FFTnnOWIXt/VoVdMY5/fqSJdix8XI2SZCiMwztGQSATbkk1fc7IoUqMprOUm+JVb7SrVKii443r98TPV5o3Cd5M/r8f96L/dr21h/Lw9Dz958x+pa8I9rCKXOCAYxvv5288WQd/V2+HKs30i08UMW1FOi9fB/vJabF20MQWAUCwvcNmB6dbCr6VXW8YFq9t0UU85LarhUKAOa+UHH8ZiViB0iGv3msT/AKfA1m3U8yxyN7ZlLEFLnv8AojMTMLEEbwejXqF/+a0pFPijUnJYaYvac5xLh5OWQAqi/wBGijcqjd7yeemJXFR8XgSp2VGPwrPqIPJHJW9uYWHhS6/E97HX+CP4ULBvqOeotYJpprJrfJ/tLJK0DHkyar1Oo3d6/wBIpyzqYlp5mTtWhqgqi7uPodBrTMAKAM+dh9a+rWI9nT8Rp9dXI8/QfWvq1zs+fiDrq5Cl2MRuZR2Cu9nz8Rx3afFANjEfrDwrvUanjI9Yh4Ra7IY/rj211bPqP+sHdxX9J6mxGAsHAA3AAgDurvZtTxg7yL3uJ7+hn+0Hto7NqeP8znW4+E8OxGO9x4Gh7NqP+s6r2K4RPBsNvTHgaOzKnjB3qfcK/Qz/AGg9tHZ1TxnOtw8Ja4WMqiqTcgWvWpSg4QUX3CU5apNodqwiUu2doOjZV3Wvcb+fnrIv7upTnoiPWtCE46mO7BxOYNfzicx77D8Ks2bW1xlnjnLI3dPS1jgZfyofWYH963vSmb35E/RkLT5i9RfB3DLJLldQRlY2N99x0V5jZdGFWvpmsrDNa+qSp08weHkuH2NlBJiw4AFyby81ek7NtPAYbvLtf1IhZIejDeM1d7LtfAVdp3HjX3POEWASJIiqqrG+bKTY6DdesXbFrRoxi6ccZf6Gzs6vUqN63ncK2XArwrc4e4LfWrmOp5uULCn9kVqcLZKUkt77xHadvKpWyl3csktokjim5WHu0bAcWuUk2Oh5RvTV7cU5W80pL4X3rkUWdtOnVi3HvXBY7zK14o9STvJn9fj/AL0X+7XtrD+Xh6Hn7z5j9Sw29sNg4kuzprcG5N/2tbEbtbaWqNalKO9bxq2uITxGWFj7mai4Rvh2HElWtdWB1BBPJW+/Qc46OeqIVHGWUPVLeNSGmXHu8jabJ4XYeawc8U/Q55Pc+7xsacp3UJ8dzMuvs6tS3pZXl/gt8fjViiaUnkqpPb0AdpsO+rpzUYuQpTpuc1BcWcbkmLvI7eczXPfr7yaxptveespQUcxXdhfQ8Yf8teoosazwPa4SCgBa4RwnGW+jL5Qf2rZiPx8am03HV9CmMoqbp538T3DztGyuvnKQw7Qb1GLcXlE5wU4uL4M7HgsSJY0kXc6hh3i9q3IyUkmjx84OEnF9w9UiAy++qnxJrgeVw6FAEbaOOjgjaWVgqKLljc89hYDUkk2sKAKYcPMCHjQS34wXz2sib7CQtYqdN1tOe1TjuOODLvZO14cUheCQOoJUkXFiADYggEaEHvqZFpriTqDgUAFABQAUAFAGe28QZLdCi/trB2m06uPI07JPRkt9nQBEWw1IBPWbVrWtKNOmkvqI1puc3kx/lOw8rHCNHDJLkdmYRozEDkHXKDa9qlcU3UpuC70SoTUZZZn8PtqeI3EMkD2sDIliQd+VWGu7fWFSsp2lTVq3m5S0XcWpLciTDwtxYOsuYdap+C0zK4rNbpFktm277vuOR8MMcwuuGxLDpWHMD2EJY1ZGnetZVVexlTjbxelw+4zjdu4yWwkwWKa276Fhv7Eqi42fc10lUmnjyJ0rijSbcI/cifLZ/wC4Yr+U/wCWluw6ni+xf2hDkHy2f+4Yr+U/5aOxKniXsHaEOQfLcR/cMV/Kf8tHYc/EvYO0IcjReTKCUSYx5IZIuMMRUSIy3+svbMBe1xu6a3rak6VNQfcjLuJqctSN5TAuY/hHwMWRjNhwFk50Oit930CfA9W+k69tqX4PY07S/wBDxV3rn3ow2Jw7xsUdSrDeCLH/AMjrrNlFxeGeghUjNaovKGnBK5bkC4Ngbbjeuxm4nJ04yPCvON9rf9j/AJvoz3M64964iGB0uwGulhbXx1rqa7kRknuyxVj0g91j41zcSxJd4qokjpc+xVGzjDzrHnv/AIg5ZPjp2Vquiuh0HmVdS610nn9uBzKNid4t31mNLuPSQcn8SwdR4DSE4NL8xcDszGtS0eaS+p5vaUUriWPL8i/pkQGpN9VS4k0Jrh0ZxmKSKNpZGyogLMddANSbCgDhe39uTYiSQtO7Rs5KrdgmUMSn0e4WFua/fUi1LBXjCPa+Q2NV9NDOMjHVquM6Xg6H5H9ohTNhmYAsRIi2OYkDK5zW6AmhPT11dFilVHTqkUhQAUAFABQAUAZfaDZpW+9bw0/CvNXL1V36mxQWmkvQ04FekSwsGOVO09vJh5ljl5Kutw+pAIJBBA5t2tVTrRhJKQ1RtJ1qblDe0+BhuGe0UnxGaNsyqirfmJuxJHrAd1Z11UU55XDBubOoypUsSWG3kpIoyxCjeTbxpZvA9KSSyyXgMbNhnzIWUg8pTex6mHP/AMtVlOq4PMWU1aNKvHEjq+zcYJoklXc4Bt0dI7jpW1CWqKkjytWm6c3B9xJqRWFABQAUAFABQBGx2z4phllRXHWNR2HeO6oThGaxJFlOrOm8weCjk4EYUm4MijoDXH+YE+2qHZ0x1bUrpd3sZrh3gUwqwxYeMEsWZySc5AAVeUeblNpu03VVWpUoLTwGbSvc1ZufFcMGbJpA2mxvEThBc3320F6lCm5vCIVq0aSzIZhxTMwtGQvOW0NuoVZKnGC3veLwr1Kj3RwubO17Wkth5W/wnP8AkNak3iDfkebpLNWK80cerEPYnVuCEOXBxDpBb1mLe41sWyxSR5S+lquJev5FxV4oNyVXIlERUSR4yggggEHQg6gg8xHRQBw/GbHEeIdQdEke4KgXAY2ygaDdupSpcPDibVvZp6Z58xVjYmzDNuBJvbpF9BrfdppS/ekx1cG1n9f9G/8AJxsCNEOLLCSSW4VrEZFGhHQSSN9t1h0306HwJnn73Kqtftm3q4UCgAoAr5NsxLMsBb6VyQEsb6LmzHoW3Oa7grdWKko95YVwsCgDKYq4kbpDE+29eXrZjWeeZs08Spr0NJhMSJFzDvHQeivRUK0asdUTJqU3CWGRNt7GjxSBZLgjVWHnLffa/Meiu1aUaiwy23uZ0JZiYzbnBQYZUkDs6ZwJLi2VSd+nh3is+4tujhqjvNi22i60nBrDxuHdmYEIzOLXbQBdVAB/VPXYGsuc9WEjs6spRxLuEz7OZVEQjAJ5TsAEGYA2ORgQ1yALHpverW2pZl6YZRCXhf1Rt9lYMQwpEP1VAPWd5PeSa9DTioRUUZNao6k3N95LqZWFABQAUAFABQAUAFAGA2/gTicVIxeyJZF5Po7wLkc99evqrEu6y6R5N2yq9FRwlv4jX6Pw8K2aMyZs2ZmazAKjNdLCym6jU3qulWg8rT9ztWvWbTUseSX5kDF8H2GsTZh6LaMOq40Pbp2VF1YdzG6d1lfjXsVsmBkBylGva9gL6br6Uak1kYVaD7zomPxJOzSzAgmAAgixBICnQ9dbE5ZoZ8jzlKGLxJeI5mAToNSdw66yeJ6dvG9nZ8HAI40QbkVV9UAVuxWEkeMnLVJy5j1SIjctQmSiIqBIbkmVfOYDtNVyqQj8TwSUZS4I51w3mRsSWQXsi5iBvNye82sO6ka041Jfhe43tnxlCi3L9oj7FkxGKiOHhCvGGFyVH0ZOvnHzQd+mu+1TUKrj0eNxydW2jPptW/lz+h0/ZuCWGJYk3KLdp3kntNzWnCChHCMCrUdSbnLvJNSKwoArNv49YonBlVHZTkuwBJt+r11FzjF/iYOjVqQfRJt+RgcNjMkqzBwHFhnJvyb3I6x1VZKtTSy2jJoWl26q0wln0Oj7N2hHOnGRNmW5G4jUcxB1FVQnGazE2qtKdKWmawyVUysr9qbP4zlL5w9vV20heWfSrVH4vzGbe46N4fAy2NxzwmyEq/P1DrBqjZltPW5y3Jfcp2texhBQhxe/0RP2dws5p1/jX8V+HhW04cjKpX/dUX1LLEcIMNbKXDZtLWNjfSxJFtd1U1Mxg3jI5TuabmkpbyiNxbKtxusObsHRXkm5OW5cT0u7G9mggwMjEGZrhdwvz9dblK1qyknWeUuBlzrQimqa4lrWmKBQAUAFABQAUAFABQB4xsL9FcbwsglkyLtck9JJ8a8nJ6pNm7FYSRW7W1FumOW3aVC/6quofqiMywNUMmNTwhrG5BG5hvF9+/Qg9B/AVKMsehxrJL4WzkbOAuLtxS3tvIIY6X/ZNb0pp2y88ClnB9a9MsxvBOAzYuJCugIkPQAvKFwbEagDvpejSTmv3wNS8uHGjLK4r8zrtax5kKAESbqhPgdjxImNnyIW59w7TStxV6KDkX0oa5YM6zEm53mvPyk5PLNVJJYRExWBSTzlB9h7iK5GUo/CWxqSjwY/sdBhr8UoUMbsNSGO67X3mmad5Wi85+gvVowqcVvNJhNqo+jck9e49hrWoX9OpuluZnVbWcN63osKfFin4Q7fjwq68qQjkpf2t0LVFavGmvMbtbSdeW7h3sxOydnS7QnZ5GOX9d+joRAdO7m3nrQp05V55kbVetTs6ShBb+5fqzX4HghhYzcqZD/iEEeqAB4inYWtOPdn1MirtGvUWM49C8ijCiygAdAFh4CmEkuAk23vZ6WrjkkGDzOKNSDSzMbd4Pl2aWIksdSrHf8AdJ9x/wDFWRqrgzOubJyeuHsZd1IJBBBG8HQjtFXGW008MQygix3UHBYxEoXJn03XO8D8fZSzs6Lnr07xtX1wqfR6txe8HdutGwjkYlDoCd6Hm19H3VdKPeTtbpxemXA2tVGuFABQAUAFABQAUAeE0Ac/2pt/EPtFsMj5YU0KgLyhxYYliRfUm2lqpvGoW8mK29WpUvVTXBf4LCvLnqBjG4USKFKqeUp1F9zAm3WRcd9TpzcXuIyWUPDq/wCW5qg/Mke0ANY6csqofNXS3MSST7q06Um6UU+CJUaajJy72TeCGCjV5JAgDWVbjoJJIt3CnrRLexTaUniKNTTplBQAlxpXGso6ig2tjAxyLrlOp5r9HdWLtConiKNO2pOK1vvK+ssaEx7h2ChcDoqunBrGpJxbcWjMxXkgDXXS46bb6tpUpSktwRnBS/E9xmF2hioeTxkyfsksPY1P66sd2Wh50barvwmTdkbDmxkhdswQm7SNe56lv5x9g9lTo0J1Hl+5TXu6VtDTHGe5L9TpGBwaQoI41sq7viTznrrVhBRWEecqVJVJOUnvBcbGTYMNSy7+dN47qiqsX9/sccGuI5FKGUMpuCLiuxmpR1R4HHFxeGIqBMKAGcViFjUs24eJPQKjKSissnTg5y0xMNtnGGWUsQBoAAOga6nnOtM271QyYm1IqFw4LuSINXmcFACJDuA6/AD4kUAdQik0HYKT1M9NFbkOCSpakGkUGruUcwMz4tUZVY2L5rdeUXPs91De842lxYjC49JCAp1KB+4m1VqrFz0d+M4JKLcda4cyVVpwKAM7w/nyYGbkM4IAIQ2IBOrE2PJFtea16M43kZ0lVi4N8TnPAQ55pHI81AN9/OIt7FrO2pWzTUfMs2bYdDVc287jb1hG4GDXNiYh0BifWS3sDU3aRzNLzX23lFd4i/QZgFmlX0ZZP8xz/wCqq7lYmTov8I9S5YIlhLAWGl9/SSLnwVa1LfMqS9TiqKMnnl9v+2XnBzClFYkWzZSOzKD+JHdWnbwcVvM+9qqclju/yXFMCQUAQdsYvi4iw3nQdp5+4XNVVp6IZL7al0lRJ8DEYx3WJ2QkEWPMefXf1ViVsOSTPQJRckmVmE2zLnUMwIJAOg3E9VVypRxuLp0IJNo0xIFKPcInqKWsANToB1ndUoRc2oriyMmorLNWoWNACQAoAuTYaab69VGKhFLkYjzKQnB4lZUDruPYbEaW0ojJSWUdqQdOWlkipkANAGHykO7L5pkmkXfccbGF109Ks9zxTqRXfnH1NCtbSqVKM/Dx/wBGs2RbiYwOZQO8aH20zbRUaMY8kK3GellnmPslTccEExNROmZ4QYnNJkG5Ped5/Ck68sywa9lTUYa33/kZp2uSeutenHTBI8PdVOkrTnzbEk2qYuNiW/m69fN3Hn7qAJuEwQkuSSLaeOp9wrPvb127SSzk1Nn7OV0pNvGDoMS2UDoA91dzneaiWFgXXToUAZXhjtQRSQjKSVJe994IZGXt3VXK56J4aLYbMldpSjJLD/Qa4G7VDylMhuIlF77ghsfEsKXo1NVzOpzS+3/YzWsHbWsIN5w/zNmJKf1oztJ6XHTXdSDDKHaG38HLFJHx62kRl3N+spHR11X1ilzGlY3HHQzBeT/CsiSswsSyj1QT/qrI2hUUnFJjtKlKnnUsGsrOLhOzMbFFO8krhQLIL31KjNpYf4h8K0LLTGacn3Ni9anOpFqCyNrMrTTFDdXKyA9IYZP9uqbvDllc2TpRlFaZcR6lS0nYLa2HiXLM6hgSQCCdCLX0HbWzYVIRpYk+8Tr29apLME2iWOE+E+3Xwb4U/wBYpcyjqNx4GHznwn26+DfCjrFLmHUbjwMPnPhPt18G+FHWKXMOo3HgYxwrbSMdbHwt8apu3uRfs5LVJlLFEGRlO5rg9hFqxrhvWjQnLEsoyONwTRtlddx0NtD1irYyytw/GcZrIR4qRfNdh3mhwT7jrjB8UiVBtudCCH1Gouqn8KIRUJKSW9FU7elNYZ5jtoTYp1DtmYlVVdy3JsLDcCSd9XTnOo95ylRo28W4+ue81vArYk0EsjTR5QVAU5lPPqLKff7Od21pSg3qRk7RuqdaKUHnebGnTJCgDHTpZmHQSPA/erNksNm5B5imajZyWiQfsj260/TWIox6zzUfqSamVkJtoQfbReuvxqDiiSyYrG42Mu54xPOY+cvSeus7S3P6m25xjQ3P+n9Cp+UJ6a+sK28o8D0dTws8M0Z3snitGUc6KfJ+x78oT019YfGjKO9FPk/YuNnTIsYJkTlEnz17Onqrz+04zlVyluwep2OlChv3NsffhMkBA4wG4vYEMPfpS9GVxDhw8zT6vCrv3e5Ii4dYf9a46xY+y9aFO4k/iiUSsJf0yXuO/PjCek3gPjVvTx5P2K+o1Oa9yk4a4+KZYJY3Ughxa4zDVbXF9OeqLhOSUkh3Zz6OU4SfIOAE0aySs0iLZFAuyi+Zrm1z+yKLWLTbZ3alROMUn3m9hmVxdWVh0qQR4inTFFMLi1cBGK2pwRiiQMskh1A1K9B6F6qSqW8YrKNq2v6lSelpBsrCiNCASbm+vYB+FZdx8RdWk5SJbuACSbAAknoA1JqlLLwUspsTghIqZywOrEC2jOcxHdu7qfhFPf8AvcX27cI55knZ8QRgoubx8/7Dk/7lU1lu+pVUeajZY0sRKjaez1kfMS17AaW+FO0I5gNUZuMcEX9Dp6Tez4VdoRb0rD9Dp6Tez4UaUHTMP0OnpN7PhRpQdMzK/Nmb0o/Wb8tHbNvyfsZHUqnkHzYm9JPWb8tHbFvyfsHUqnkHzZm9JPWb8tHbFvyfsd6nU5oPmxN6Ufi35aO2Lfk/YOp1eYfNib0o/Fvy0dsW/J+wdTq80HzYm9KPxb8tHbNvyfsHU6vNB82ZvST1m/LR2zQ5M51Kp5B82ZvST1m/LXe2aHJh1Gp5B82ZvST1m/LR2zQ5MOo1PIPmzN6Ses35a52zb8n7HepVPIvOBnBaf5XFJnQCJg7WZrlRoQNNb7uwmm7S+p3MnGGd3MWuKEqUcy7zreJizoyXtmUi/RcWvWgInHdqeT2TDhc06NmuNEYbrdfXWde3itUnJZyP29Pp28PGCv8Amo32q+qfjSHbcPA/ca6jLme/NRvtV9U/GjtuHgfuHUJcw+ajfar6p+NHbdPwP3DqMuYfNRvtV9U/GjtuHgfuHUJcw+ajfar6p+NHbcPA/cOoS5h81G+1X1TR23DwP3DqMuZ581W+1X1T8aO26fgfuHUJcw+arfar6p+NHbdPwP3DqEuYfNRvtV9U/GjtyHgfuHUJcw+arfar6p+NHblPwP3DqEuZ0rgBsI4TDkM4YytxmgtYFFW2u86VrUqnSQU8YyZ1VYk1yNNVhWVXCP6ofeHuNUV/hHLH5v0KXDebWJcfGaM+I3jTfKnpG7fcWxbuOi/xVyku/wDeSp79xB2lOVjkkHnKrML7rgEi9aNOKyojM3pg2u5EHgvtJpwrvbMHkj0FhYpHINP4TVV5TUW0vISp1HPezS1nFxhNvcJJo8RIiZMqkAXUk6KL3N+m9blrQi6UWxeVzOLwi78n+KfGyypMQAiBhkFjctbW96YVtBlc72pHkbj5txenJ4r+Wu9VgV9oVeSD5txem/iv5aOqwDtCryRE4SbPjRVZEVbtY2Fr3F/wpS6s6CWVBF1hWnKTjJ9xSY1VRLhRckAXHefYDWdZWdKvW0tbiO0r2dvR1Re/O4hfKf2E8D8a1nsW28zCW3bnyEtiCeZR2D41OOx7WPGOSE9t3cuDx6DWY1f2da/20Ldp3f8AcYZjR2da/wBtB2nd/wBxilkI194B9hFHZ1r/AG0dW07v+4yxwW00BAlgjYc5C2bt6D7Ki9m23dBF9PbFwvjeTWpsrDugZY0swuCB0jQ1TLZ9vhrQjWhd1XhqTKvZGDiLlXjU6c43EVlWFClKo4TimP3VWagpRZoMNg4475EVb77C163KVCnS+CKRmTqTn8TyP1cQESRKwswBHQRf31GUIyWJLJ1Sa4GOxOHAmkFhYMdLdJuPZWDe04RbSS4m9Sm3Ri/IxnCDabriHVGsq2W1ha4FzzdJ9la2z7Wn0CcorL38DyG1Lyr1mShJpLdxK87Xm9P2D4U71aj4F7Iz+t1/G/djEmOkbfI3cSPYKOrUfAvZB1qv45e7E/KX9N/Wb40dWo+BeyOdar+OXuw+Uv6b+s3xo6tR8C9kHWq/jl7sk4TbE8fmSnsYBx4OCK47Wi/6F7E431zHhN+5uOBvCRcS/ETQxCSxKsqABrakEczW100NjuqipaUo71FexqWm0alV6JveaHbOEQBWCKNbGyjn/wCqydoUIKKkkjbtaktTTZJwEEbRqciXtY8kc2nRTNrCnOknpXsU1pTjNrLJ1NlAV0Cq4R/VD7w9xqiv8A5Y/N+hQwo+hzjL6OXX1s34Vi1pR1PdvH551CH8+Q9SDu1NvGpUf6fqFP4yv2x9RN+7f+k0/T+JepbW+XL0KbgMDl6uO07RC+b2FfGo3+M/T9TOofqa+ZZCeQ6AftIWPbcOKy4uON6GnnuOVbXYmea5ueMe53XsxG7mr0lHHRrHIzp/Eza+Rz6+f92v9VXRKavA6vUikKAIG24g0RvzEEdt/wDzSt60qLbGbSTjVWDH7UizgL3g9dZmz6nRNyG72xV3S05w1wKhldd4v1jQ+B09vdXooVIzWYs8dXta1CWmpHB5xo6D6p/Cpi4caOvwPwoAUrX1FACsjm5VCwAuTrYdtgbUHUm+AlGuAekXoOG44H4vPDkO+M27jqPxHdVU1vNixqaqeOQiT6PE35s1+5v+689L+DeZ8/zPQL+Jb/T8jQVvGYFABQBnNsoBMbbyBft3e61YO0d9bSjVtJPo95g9u7CZmMkY1JuyHQ36Rf3Vq2tyoRUJ9xlbT2Q6knWob88V+qM5LCymzKVPWCPfWipKXBnm50p03iSaG6kVhQAUASMXgZIspkRlzjMtx5w01HVqPGuZyTlTlHGpcRWzMYYJo5hvjYN2gbx3i4765JZWApz0TUuR2rG2eIldQQGB6Rv91ZN3DVSkj1tvP8aZH2JJyWXoN/H/AKpXZ08xcS+7j+JMs60hQKAKrhH9UPvD3GqK/wAI5Y/N+hURjQdlYFR5kx98SM3nSdifjV9LjH6hT+MrtsfUTfu3/pNP0/iXqW1vgfoQeBC/RR//AN27wYl91U37/E/p+ohQ4I1VZgyci2ofp5f3kn9Zr09L4F6IzZfEzb+Rz6+f92v9VXRKavA6vUikKAKrb8llVek38P8Auszac8QUebHLKOZtmd4Vlm2e0UFzMzL5psw5YYkHS2gtv56ja1qMKKi5LJOcajquSTJEfBvA5RmeYmwv/wDkYjU210z0yrm2XCSKpRry3NNi04OYAbmk/nzn3tU+u0fGLuzb4w+wv9A4H0n/AJ0v5q712j4yPUP+BmUwMguMp0JsdNbm9/bVvXrfxIyHs25z8DLbg+CjssgISRGVjzDTQ+8d9Rle2/iQzbWNxGTUoPDRUx4GQXGU6EgHTUc1vd3VLr1v4kLdm3PgZdcGHaGU5wQjKQTzAjUH3jvqM723a+JDVnZ3NOe+Dwy02zKrMGRgdLHu3e+sW/qQnNSg8nobWMoxaki8w0mZFbpANbdKeuClzRmzjpk0O1YRCgDNGdTPnY6Br9Og3e4V511Yu51z4Z/I1VCSo6Y8cFRNs6OfaM0+IQNBxSpHcnVhluco1FuVv6a03fW7e9/YWVCqo4RYHYmzP7uvg/xrqv7dd/2Iu3rS4nv6E2Z9gvg/xrvaFDn+ZDqc/CvsUfCvg9A0afIo1Vw/K1IumU87Hpt4mpw2lbrv+wnebNrVIrRFfYzHzZxPoL66/GrO07bn9hDsa68K9y92psuWbB4ZCBx0BZLXFjGdxDbtMqi3bUFtK3T4/YZqbLuZ0orG9efcUXzZxPoL66/Gp9qW3P7C3Y934V7nSOC+L4vCxxYjR0BT0rqCQuo/ZsO6qKl/bSzv+xrW1pcQppSW9eY5shrS2voQR+I91ZljJKthcGaV0m6eS8KGttxZnZPK4dKvhH9UPvD3GqLj4Byx+b9CpFeefEfIROsn31Hgin8aaorfH0Cl8TIG2PqJv3b/ANJp6n8S9S2t8D9Ct4DSfRr1PKnrLFJ/pNVX6/E/oIUHuNcKzBk5DtE/TS/vH/qNenpfAvRGbLizceRz6+f92v8AVVsSmrwOr1IpCgCg202aUL0ADvP/AAVh7QeuuofveaVqtNNyKTyiYgYcYUJdA0wzlfOMajlL7fZWl1Wil8KFYVpvO80OxcZhMWnGQAMu48grY9FmAqXVaPhRF1aq4tlh8hj9BfCjqtHwo509TxMrtt43CYROMnAVToLIWJPRyR76Oq0V/Sjqq1XwbOfQbaaSWXKXCiQ5QbXCSktGDYkabuy1Tp2tB/0Iz7+vcUmpRm8P8yemMcEHMTYg2O425jVnU6HgQitoXCfxsuuFeHaPJPExEbWDKNLEi4YD/nPUIWlB7tCHLy5uI4nGbwyljxrqQSxIBBIPOAd1T6nQ8CE47QuU8ubNttTCII8yKBax06Dp+NZt9bU40m4pJo9JbVpSmk2PbDkvHb0SR+P41Zs6eqjjkQu44qZ5lhT4sNYqTKjN0A1VWnopuXkTpx1SSKfYUAYsSAbADXXf/wBVlbNpqUpSkPXk2kkjIbF4QxwYnHS4hXMJnMavoyRGNnGXiycwuCPNU7q1OjhyQq3JpJM6BgnhmRZIwrI2oOW1+4i9S6OHJFTlJd47KkaqWZVAAuTlG4dgo6OHJBrlzOf8LeEkWIw0owaOeLKF51tGqWddLEh2vu0HPXNEOSJOMpLDfExL4qYGxlkvYH6xtzAMOfoIplUqbWdK9jzdSpWhJxcnu82a3ydYjjZJ8PKzMJI7gliSuU5TlY6qbPvHQKjOjDjpXsOWNecnKEpPeuZndsxT4aZ4XmkJQ7+MbUEXB36XBGlSVKm1nSvYUqzrU5uLk/dmp8mGNLyywyEvdA65iWtlOU2J3XzDwqFSjDHwoc2fcTcnFyZqMcOLnuNBdWsPb7jWBcrorlSXkz01F9JRaZoa3jMPCK40gyVHCNPox99fcaUu1im2O2L/AIn0ZTV500SvVrgn0mc9wYqv+VRT9Jb/AKInRXFkPbH1E37t/wCk0zT+JepOt8t+hn+A81s49GSJh/HniP8AUK7fx4Pyf+TNoM3grGHDj+NP0j/fb+o16en8C9EZsuLN15HPr5/3a/1VbEpq8Dq9SKQoA//Z"
            alt="Upload Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default UploadLecture;
