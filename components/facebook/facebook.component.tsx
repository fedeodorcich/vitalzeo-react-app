const FacebookComponent = () => {
  return (
    <>
      <div className="mt-10">
        <h2 className="text-2xl md:text-4xl nunito-bold text-zeo-two my-10">
          Seguinos en Facebook
        </h2>
        <div className="">
          <iframe
            className="overflow-hidden border-none mx-auto"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvitalzeo&tabs=timeline&width=350&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="350"
            height="600"
            scrolling="no"
            
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default FacebookComponent;
