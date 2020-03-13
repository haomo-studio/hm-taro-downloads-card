import Taro from '@tarojs/taro';
export default {
  hmDownloadsCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Taro.pxTransform(750),
    height: Taro.pxTransform(292)
  },
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: Taro.pxTransform(39),
    paddingRight: Taro.pxTransform(56),
    paddingLeft: Taro.pxTransform(62),
    boxShadow: '0px 10px 30px rgba(209, 213, 223, 0.50)',
    backgroundColor: '#5351fb',
    width: Taro.pxTransform(721),
    height: Taro.pxTransform(214)
  },
  downloadDetail: { display: 'flex', flexDirection: 'row' },
  downloadDetailContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: Taro.pxTransform(90)
  },
  count: {
    opacity: 1,
    lineHeight: Taro.pxTransform(47),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontFamily: 'Helvetica',
    fontSize: Taro.pxTransform(31),
    fontWeight: 'normal'
  },
  downloads: {
    opacity: 1,
    marginTop: Taro.pxTransform(2),
    lineHeight: Taro.pxTransform(41),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontFamily: 'Helvetica',
    fontSize: Taro.pxTransform(27),
    fontWeight: 'normal'
  },
  downloadImage: { width: Taro.pxTransform(273), height: Taro.pxTransform(97) }
};
