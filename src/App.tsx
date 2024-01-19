import './App.css'
import colors from './assets/colors'
import Color from './components/Color'

function App() {
    return (
        <div className='App flex'>
            {colors.map((color) => (
                <div className='h-screen w-1/2' key={color}>
                    <p className='text-xl text-center font-bold'>{color.toUpperCase()}</p>
                    {[...Array(9)].map((_, idx) => (
                        <Color colorClass={`bg-${color}-${(idx + 1) * 100}`} shade={(idx + 1) * 100} key={idx} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default App
