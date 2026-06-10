from pathlib import Path
from math import cos, degrees, sin, tau

from PIL import Image, ImageDraw, ImageFilter


OUT = Path("public/images/animated-tech-core.gif")
SIZE = 220
CX = CY = SIZE // 2

OUT.parent.mkdir(parents=True, exist_ok=True)

frames = []
for i in range(36):
    angle = i / 36 * tau
    image = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)

    for radius, alpha in [(88, 70), (66, 95), (42, 130)]:
        draw.ellipse(
            (CX - radius, CY - radius, CX + radius, CY + radius),
            outline=(72, 229, 255, alpha),
            width=2,
        )

    for spoke in range(9):
        spoke_angle = angle + spoke * tau / 9
        x1 = CX + cos(spoke_angle) * 22
        y1 = CY + sin(spoke_angle) * 22
        x2 = CX + cos(spoke_angle) * 96
        y2 = CY + sin(spoke_angle) * 96
        draw.line((x1, y1, x2, y2), fill=(135, 255, 101, 90), width=1)

    draw.arc(
        (CX - 92, CY - 92, CX + 92, CY + 92),
        degrees(angle),
        degrees(angle) + 78,
        fill=(255, 107, 95, 230),
        width=4,
    )

    pulse = 10 + sin(angle) * 5
    draw.ellipse((CX - pulse, CY - pulse, CX + pulse, CY + pulse), fill=(72, 229, 255, 210))

    scan_y = CY + sin(angle) * 18
    draw.rectangle((32, scan_y - 2, SIZE - 32, scan_y + 2), fill=(72, 229, 255, 55))

    glow = image.filter(ImageFilter.GaussianBlur(10))
    frame = Image.alpha_composite(glow, image)
    frames.append(frame.convert("P", palette=Image.Palette.ADAPTIVE))

frames[0].save(
    OUT,
    save_all=True,
    append_images=frames[1:],
    duration=45,
    loop=0,
    optimize=True,
)

print(OUT)
