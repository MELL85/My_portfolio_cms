import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {['home', 'experience', 'services', 'my work', 'testimonials', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#f5cf02' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots