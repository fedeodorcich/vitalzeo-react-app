

const BannerComponent = ({bannerData})=>{

    const styleDiv={
        display: 'flex',
        justifyContent: 'center',
    }

    return(
        <div style={styleDiv} className="rounded-xl mx-1 w-100">
            <img src={bannerData} className="rounded-xl" />
        </div>
    )
}

export default BannerComponent;