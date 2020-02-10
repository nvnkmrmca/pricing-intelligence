import * as React from 'react';
import { styles as cardStyles } from '../../styles/card';
import { View } from '../common/elements';
import { COLOR } from '../../constants';
import { loadWebsites, loadTypes, loadProducts } from '../../store/actions/product';

interface IProps {
  history: any
};

interface IState {
  isLoading: boolean,
  websites: Array<string>,
  website: string,
  isBrand: boolean,
  productType: string,
  types: Array<any>,
  type: string,
  products: Array<any>
};

export default class Dashboard extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      websites: [],
      website: '',
      isBrand: true,
      productType: '',
      types: [],
      type: '',
      products: []
    }
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    loadWebsites((result: Array<any>, message: string) => {
      this.setState({
        isLoading: false,
        websites: result
      });
    });
  };
  
  onWebsiteChange = (website: string) => {
    this.setState({
      website: website,
      isBrand: true,
      productType: '',
      types: [],
      type: '',
      products: []
    });
  };

  onTypeChange = (type: string) => {
    this.setState({
      isBrand: (type === 'brand'),
      productType: type,
      type: '',
      types:[],
      products: [],
      isLoading: true
  });
    loadTypes(this.state.website, (type === 'brand'), (result: Array<any>, message: string) => {
      this.setState({
        isLoading: false,
        types: result
      });
    });
  };

  onTypesChange = (type: string) => {
    this.setState({
      type: type,
      products: [],
      isLoading: true
  });
    loadProducts(this.state.website, this.state.isBrand, type, (result: Array<any>, message: string) => {
      this.setState({
        isLoading: false,
        products: result
      });
    });
  };
  render() {
    return(
      <main style={styles.content}>
        <View className='fl' style={cardStyles.container}>
          <View style={cardStyles.row}>
            <select onChange={(e) => this.onWebsiteChange(e.target.value)}>
              <option value=''>Select Website</option>
              {(this.state.websites && this.state.websites.length > 0) &&
              this.state.websites.map((d, i) => {
                return(
                  <option value={d}>{d}</option>
                );
              })
              }
            </select>     
          </View>
          <View style={cardStyles.row}>
            <select defaultValue={this.state.productType} onChange={(e) => this.onTypeChange(e.target.value)}>
              <option value=''>Select Brand/Category</option>
              <option value='brand'>Brand</option>
              <option value='category'>Category</option>
            </select>
          </View>
          <View style={cardStyles.row}>
            <select onChange={(e) => this.onTypesChange(e.target.value)}>
              <option value=''>{'Select ' + (this.state.isBrand ? 'Brand' : 'Category')}</option>
              {(this.state.types && this.state.types.length > 0) &&
              this.state.types.map((d, i) => {
                return(
                  <option value={d}>{d}</option>
                );
              })
              }
            </select>
          </View>
          {(this.state.products && this.state.products.length > 0)&&
          <View style={{...cardStyles.row}}>
            <View>
              <label style={{fontWeight: 'bold', marginBottom: 15}}>Products</label>
            </View>
          {this.state.products.map((d, i) => {
            return(
              <View style={{marginBottom: 15}}>
                <View>
                  <label style={{fontWeight: 'bold'}}>Product Name: </label>
                  <label>{d.name}</label>
                </View>
                <View>
                  <label style={{fontWeight: 'bold'}}>Price: </label>
                  <label>{d.price}</label>
                </View>
                <View>
                  <label style={{fontWeight: 'bold'}}>MRP: </label>
                  <label>{d.mrp}</label>
                </View>
                <View>
                  <label style={{fontWeight: 'bold'}}>Packing Qty: </label>
                  <label>{d.packingQty}</label>
                </View>
                <View>
                  <label style={{fontWeight: 'bold'}}>MOQ: </label>
                  <label>{d.moq}</label>
                </View>
                <View>
                  <label style={{fontWeight: 'bold'}}>Discount: </label>
                  <label>{d.discount}</label>
                </View>
                <View>
                  <label style={{fontWeight: 'bold'}}>Brand: </label>
                  <label>{d.brand}</label>
                </View>
                <View>
                  <label style={{fontWeight: 'bold'}}>Category: </label>
                  <label>{d.packingQty}</label>
                </View>
                <View>
                  <label style={{fontWeight: 'bold'}}>URL: </label>
                  <a href={d.url}>{d.url}</a>
                </View>
                <View>
                  <label style={{fontWeight: 'bold'}}>Category Path: </label>
                  <a href={d.categoryPath}>{d.categoryPath}</a>
                </View>
              </View>
            )
          })
          }
        </View>
          }
        </View>
      </main>
    );
  }
};


const styles = {
  content: {
    flex: 1,
    // backgroundColor: 'transparent',
    width: '100%',
  },
  tab: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center'
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.PRIMARY,
    'border-bottom-style': 'solid',
    color: COLOR.PRIMARY
  }
};