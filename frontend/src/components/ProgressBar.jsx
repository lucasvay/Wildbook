
export default function ProgressBar({progress}){


    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '70%',
    }}>
        <div style={{
            width: '100%',
            height: '15px',
            backgroundColor: 'lightgrey',
            borderRadius: '3px',
            position: 'relative', 
            border: '1px solid darkgrey',
        }}>
            <div style={{
                position: 'relative',
                width: `${progress}%`,
                height: '13px',
                backgroundColor: 'green',
                borderRadius: '3px',
            }}>
                
                <div style={{
                    position: 'absolute', 
                    height: '13px',
                    top: '-3px',
                    left: progress > 7 ? '30%' : '0',
                    // transform: progress>10 ? 'translate(-50%, 0)' : 'none',
                    color: 'white', 
                    fontSize: '0.8em',
                    padding: 0,
                }}>
                    {progress}%
                </div>
            </div>
        </div>
    </div>
}