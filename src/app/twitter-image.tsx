import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Anurag Verma - Full Stack Developer & AI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f1eb",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Paper card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fdfbf7",
            borderRadius: "8px",
            padding: "60px 80px",
            boxShadow: "4px 4px 20px rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          {/* Tape decoration */}
          <div
            style={{
              position: "absolute",
              top: "-15px",
              left: "50%",
              transform: "translateX(-50%) rotate(-2deg)",
              width: "80px",
              height: "30px",
              backgroundColor: "rgba(255,248,220,0.9)",
              borderRadius: "2px",
            }}
          />

          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#2c2c2c",
              marginBottom: "10px",
              fontStyle: "italic",
            }}
          >
            Anurag Verma
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "32px",
              color: "#4a4a4a",
              marginBottom: "30px",
            }}
          >
            Full Stack Developer & AI Engineer
          </div>

          {/* Skills tags */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: "800px",
            }}
          >
            {["Python", "Django", "Next.js", "TypeScript", "AI/ML", "Azure"].map(
              (skill) => (
                <div
                  key={skill}
                  style={{
                    backgroundColor: "#3a5a7c",
                    color: "white",
                    padding: "8px 20px",
                    borderRadius: "20px",
                    fontSize: "20px",
                  }}
                >
                  {skill}
                </div>
              )
            )}
          </div>

          {/* Tagline */}
          <div
            style={{
              marginTop: "30px",
              padding: "15px 25px",
              backgroundColor: "#fff9c4",
              transform: "rotate(-1deg)",
              fontSize: "24px",
              color: "#2c2c2c",
              fontStyle: "italic",
            }}
          >
            &quot;Turning chaos into unicorns&quot;
          </div>

          {/* Website */}
          <div
            style={{
              marginTop: "30px",
              fontSize: "20px",
              color: "#6b6b6b",
            }}
          >
            anurag629.github.io
          </div>
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            fontSize: "60px",
            opacity: 0.15,
          }}
        >
          ✦
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            fontSize: "40px",
            opacity: 0.15,
          }}
        >
          ✧
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
