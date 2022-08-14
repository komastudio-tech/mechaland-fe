const Skeleton = ({ height = "260px", width = "100%", style = {}, ...props }) => {
	return (
		<div className={`animate-pulse bg-[#cccccc] rounded-[8px]`} style={{ height: height, width: width, ...style }} {...props}>
		</div>
	)
}

export default Skeleton;