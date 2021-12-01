import btts from '@/utils/cors'

export default function speak(msg) {
  console.log(msg)
  btts(
    {
      tex: msg,
      tok:
        '25.460eac2eaa96064987fb7d42b0bdebd9.315360000.1953616249.282335-24318664',
      spd: 5,
      pit: 5,
      vol: 15,
      per: 103
    },
    {
      volume: 0.3,
      autoDestory: true,
      timeout: 10000,
      hidden: true,
      autoplay: true
    }
  )
}
