"use client";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

const GallerySection = () => {
  const galleryImages: GalleryImage[] = [
    {
      src: "/gallery1.avif",
      alt: "Collaborative workspace with multiple workstations",
    },
    {
      src: "/gallery2.avif",
      alt: "Dimly lit meeting room with team collaboration",
    },
    {
      src: "/gallery3.webp",
      alt: "Workspace with panoramic city view",
    },
    {
      src: "/gallery4.avif",
      alt: "Spacious open-plan office with modern design",
    },
    {
      src: "/gallery5.avif",
      alt: "Modern office hallway and entrance",
    },
  ];

  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        <div className="mb-8 h-fit sm:mb-12 md:sticky md:top-40 md:self-start">
          <h2 className="mb-6 text-2xl font-light text-gray-900 sm:mb-8 sm:text-3xl md:mb-12 md:text-4xl lg:mb-16">
            Socio Space in Pictures
          </h2>
          <p className="max-w-2xl text-sm font-light sm:text-base">
            Welcome to Socio Space's visual showcase, a curated gallery
            capturing the essence of our co-working haven. Our collection of
            images transports you to a world where work and inspiration
            seamlessly intertwine. Explore our thoughtfully designed workspaces,
            discover the faces of our diverse community, and witness the vibrant
            energy of our events. Whether you're seeking a tranquil workspace
            bathed in natural light or the dynamic atmosphere of networking
            sessions, our gallery offers a glimpse into the versatility and
            vibrancy of Socio Space.
          </p>
          <p className="mt-3 max-w-2xl text-sm font-light sm:mt-4 sm:text-base">
            Get inspired, and see why we're the preferred choice for
            professionals and creatives looking for a co-working experience that
            transcends the ordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
