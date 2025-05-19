
const LeafAnimationVersion2 = () => {
  const leafStyle = {
    position: 'relative',
    float: 'left',
    width: '150px',
    height: '300px',
    pointerEvents: 'none',
    zIndex: 10
  };

  const imgStyle = {
    width: '100px',
    position: 'absolute',
    transform: 'scale3d(1, 0.5, 1) rotateZ(10deg)',
    animation: 'falling 5s ease-in-out infinite'
  };

  const keyframes = `
    @keyframes falling {
      0%   { top: 0%; left: 0%; transform: scale3d(1, 0.5, 1) rotateZ(30deg); }
      25%  { top: 30%; left: 90%; transform: scale3d(1, 0.3, 1) rotateZ(0deg); }
      50%  { top: 60%; left: 10%; transform: scale3d(1, 0.2, 1) rotateZ(0deg); }
      75%  { top: 80%; left: 80%; opacity: 1; transform: scale3d(1, 0.3, 1) rotateZ(0deg); }
      100% { top: 100%; left: 20%; opacity: 0; transform: scale3d(1, 0.2, 1) rotateZ(0deg); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div className="leaf" style={leafStyle}>
        <img 
          src="/images/leaf.png" 
          alt="Falling leaf" 
          style={imgStyle}
        />
      </div>
    </>
  );
};

export default LeafAnimationVersion2;