import Blockies from 'react-blockies';
type BlockieProps = {
  address: string 
}

export const Blockie: Blockies.FunctionComponent<BlockieProps> = props => {
  const { address } = props
   return (
  <Blockies
    seed= {address} /* the only required prop; determines how the image is generated */
    size={12} /* number of squares wide/tall the image will be; default = 15 */
    scale={4} /* width/height of each square in pixels; default = 4 */
    color="" /* normal color; random by default */
    bgColor="" /* background color; random by default */
    spotColor="" /* color of the more notable features; random by default */
    className="identicon" /* optional class name for the canvas element; "identicon" by default */
  />
   )}