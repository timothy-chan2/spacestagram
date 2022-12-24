// Animation of an astronaut floating in space
const FloatingAstronaut = () => {
  return (
    <article className='bkgd'>
      <div className='stars'>
        <div className='s1' />
        <div className='s2' />
        <div className='s3' />
        <div className='s4' />
        <div className='s5' />
        <div className='s6' />
      </div>
      <div className='astronaut'>
        <div className='tank' />
        <div className='person'>	
          <div className='helmet'>
            <div className='glass'>
              <div className='reflection' />
            </div>
          </div>
					<div className='suit'>
						<div className='panel'>
							<div className='btn1' />
							<div className='btn2' />
							<div className='knob' />
						</div>
					</div>
					<div className='arml'>
						<div className='handl'>
							<div className="glovel">
								<div className='thumbl' />
								<div className='wrist2' />
							</div>
						</div>
					</div>
					<div className='armr'>
						<div className='handr'>
							<div className='glover'>
								<div className='thumbr' />
								<div className='wrist1' />
							</div>
						</div>
					</div>
					<div className='legl'>
						<div className='bootl' />
					</div>
					<div class='legr'>
						<div class='bootr' />
					</div>
        </div>
			</div>
    </article>
  );
};

export default FloatingAstronaut;