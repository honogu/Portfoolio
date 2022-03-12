import './Skills.css';

const Skill = (prop) => {
    return (
        <div className='Skill'>
            <img src={require('../img/skills/' + (prop.Src) + '.png')} alt={prop.Src}></img>
            <h3>{prop.Src.replace('Sharp', '#')}</h3>
        </div>
    )
};

export default Skill;