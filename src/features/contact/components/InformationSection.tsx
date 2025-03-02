const InformationSection = () => {
  const contactDetails = [
    {
      title: "Location",
      description: "785 15th Street, Office 478 Berlin, De 81566",
      subtitle: "Would you like to join our growing team?",
    },
    {
      title: "Email Address",
      description: "info@socio.com",
      subtitle: "Have a project in mind? Send a message.",
    },
    {
      title: "Phone Number",
      description: "+123-456-7890",
      subtitle: "Would you like to join our growing team?",
    },
  ];

  return (
    <section className="my-24 bg-neutral-300 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {contactDetails.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-4 text-left"
            >
              <div className="flex items-center space-x-4">
                <h3 className="text-4xl font-light">{contact.title}</h3>
              </div>

              <p className="text-xl font-light">{contact.subtitle}</p>
              <p className="text-base font-light">{contact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
