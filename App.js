import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus massa, pretium nec libero eu, fermentum maximus massa. Mauris consectetur et lorem id malesuada. Suspendisse porta neque ac sollicitudin feugiat. Sed sit amet felis dui. Sed ultrices urna ut elit feugiat vestibulum. Proin semper quam magna, id pharetra augue aliquet id. Donec eget mollis magna. Cras dapibus rutrum nulla, sit amet posuere massa consequat sit amet. Vivamus id metus dictum, molestie nisl ac, dignissim magna. Vestibulum at mauris quam. Quisque posuere sem sed dolor tempor tristique. Quisque luctus ipsum est, dictum placerat est tempor ac. Nulla pharetra sem nec diam vestibulum sollicitudin. Aenean pretium quis eros ac congue. Donec nec tincidunt augue.\n' +
      '\n' +
      'Nam dictum ut lacus sit amet euismod. Curabitur pretium aliquet magna in vulputate. Vestibulum facilisis, felis at venenatis hendrerit, arcu leo auctor ipsum, sed dapibus purus sem quis justo. Cras non lorem volutpat, lacinia tellus ut, volutpat purus. Praesent et tempus sapien, ut rhoncus lectus. Suspendisse in malesuada tellus. Mauris quis pellentesque dolor. Nulla mattis metus quis lacus bibendum, sit amet dictum ex tempus. Pellentesque eget pharetra nisi. Vivamus vel elit vehicula tellus ultricies maximus vitae sed quam. Duis euismod, elit vel hendrerit tincidunt, justo magna ultrices ex, sit amet posuere odio lorem id orci.\n' +
      '\n' +
      'Donec egestas elit orci, sit amet cursus massa feugiat tempus. Pellentesque quis aliquam ante, a ultricies diam. Cras et nunc neque. Aenean libero nunc, pretium sollicitudin venenatis et, ultrices vitae ante. Phasellus pulvinar ante velit, quis interdum odio pulvinar non. Maecenas vitae augue id nulla posuere malesuada. Vivamus tristique enim et fringilla feugiat. Vivamus vehicula tempus arcu, a convallis sapien facilisis eget. Integer aliquet mattis ex, sed commodo eros efficitur ut. Nam ultrices sollicitudin augue sed tempus.\n' +
      '\n' +
      'Sed justo magna, interdum ac posuere at, rutrum sed ligula. Vestibulum quis nibh vitae lorem consectetur sollicitudin. Suspendisse eu nisl viverra, condimentum justo ac, finibus orci. Aenean ultrices fermentum tortor, sit amet elementum orci imperdiet ut. In finibus rhoncus rutrum. Sed vel sem turpis. Cras laoreet in risus nec tincidunt. Vivamus a ipsum imperdiet, convallis tortor vel, faucibus ex.\n' +
      '\n' +
      'Ut volutpat nisl mauris, non vehicula justo imperdiet vel. Morbi dapibus a elit in consectetur. Aliquam euismod hendrerit enim, non pulvinar eros tempus ut. Nulla nec quam imperdiet, tempor urna sed, consequat purus. Quisque dictum sem a ex lobortis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi justo purus, varius quis tincidunt sit amet, cursus vitae sem. Sed egestas libero eros, sed tristique tellus porta vel. Aliquam commodo nisi sed mauris posuere euismod. Quisque vitae pretium sapien, et venenatis nulla. Morbi consequat luctus massa, imperdiet gravida urna mollis a.'
    }
  }

  render() {
    return (
      <View style={{ height: '100%' }}>
        <View style={{height: 25}} />
        <View style={{height: 50}}>
          <Text style={{textAlign: 'center'}}>Header { new Date().toString() }</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            multiline
            value={this.state.textValue}
            style={{flex: 1, width: '100%', borderWidth: 1, borderColor: 'red'}}
            underlineColorAndroid='transparent'
            placeholder="Type your joke notes here..."
            autoComplete={false}
            onScroll={function() { console.log('scrolling') }}
            onFocus={function() { console.log('focusing') }}
            onChangeText={(text) => {
              this.setState({textValue: text})
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
});

