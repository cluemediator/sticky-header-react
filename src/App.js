import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <div className="App" style={{ marginTop: sticky.offset }}>
      <div className="header">
        <h1>Sticky Header Website</h1>
        <p>A website created in HTML</p>
      </div>

      <div id="sticky-header" className={`navbar${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#" className="right">Login</a>
      </div>

      <div className="row">
        <div className="main">
          <h2>Lorem ipsum dolor sit amet</h2>
          <h5>Arcu dui vivamus arcu felis bibendum</h5>
          <img className="fakeimg" src="/images/img-1.jpg" />
          <p>Excepteur sint occaecat</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce. Mauris pellentesque pulvinar pellentesque
          habitant morbi. Libero id faucibus nisl tincidunt eget nullam non. Rhoncus aenean vel elit scelerisque mauris
        pellentesque pulvinar pellentesque habitant.</p>
          <br />
          <h2>Vivamus arcu felis</h2>
          <h5>Tellus mauris a diam maecenas sed enim</h5>
          <img className="fakeimg" src="/images/img-2.jpg" />
          <p>Ultrices tincidunt</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Augue interdum velit euismod in pellentesque. Vivamus arcu felis bibendum ut tristique et.
        Tincidunt tortor aliquam nulla facilisi cras.</p>
          <br />
          <h2>Purus semper eget duis at tellus at urna</h2>
          <h5>Fermentum leo vel orci porta</h5>
          <img className="fakeimg" src="/images/img-3.jpg" />
          <p>Tristique nulla aliquet</p>
          <p>Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Dapibus ultrices in iaculis nunc sed augue.
        Senectus et netus et malesuada fames ac turpis.</p>
          <br />
          <h2>Fermentum dui faucibus in ornare quam</h2>
          <h5>Viverra nibh cras pulvinar</h5>
          <img className="fakeimg" src="/images/img-4.jpg" />
          <p>Scelerisque mauris pellentesque</p>
          <p>Scelerisque pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tempor orci eu
        lobortis elementum nibh tellus molestie nunc.</p>
        </div>
        <div className="side">
          <h2>Eget mi proin</h2>
          <h5>Sed libero enim:</h5>
          <img className="fakeimg" src="/images/s-img-1.jpg" />
          <p>Massa tincidunt dui ut ornare lectus sit amet est.</p>
          <h3>Mi ipsum faucibus</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <img className="fakeimg" src="/images/s-img-2.jpg" />
          <h3>Malesuada fames</h3>
          <p>In nisl nisi scelerisque eu ultrices.</p>
          <img className="fakeimg" src="/images/s-img-3.jpg" />
        </div>
      </div>

      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default App;
