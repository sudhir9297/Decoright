import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SectionList,
  Button,
} from 'react-native'
import { ProductList } from '@/constants/productData'
import { CapitalizeSentence, getItems } from '@/constants/utils'
import { SafeAreaView } from 'react-native-safe-area-context'
import SingleProduct from '@/components/SingleProduct'
import { StatusBar } from 'expo-status-bar'

const CategoryList = [
  'All',
  ...Object.entries(ProductList).map(([name]) => CapitalizeSentence(name)),
]

const App = () => {
  const [currentCategory, setCurrentCategory] = useState<string>(
    CategoryList[0]
  )
  const [currentCatItem, setCurrentCatItem] = useState<any>({})

  useEffect(() => {
    if (currentCategory === 'All') {
      const allItem = getItems(ProductList)
      setCurrentCatItem(allItem)
    } else {
      const allItem = getItems(ProductList, currentCategory.toLowerCase())
      setCurrentCatItem(allItem)
    }

    return () => {}
  }, [currentCategory])

  const handleCategoryClick = (category: string) => {
    setCurrentCategory(category)
  }

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => handleCategoryClick(item)}
      style={styles.item}
    >
      <Text
        style={item === currentCategory ? styles.activeTitle : styles.title}
      >
        {item}
      </Text>
    </TouchableOpacity>
  )

  const currentCatItemsList = Object.entries(currentCatItem)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated style="inverted" />
      <FlatList
        data={CategoryList}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
      <View style={styles.filterWrapper}>
        <Text style={styles.totalProductText}>
          {currentCatItemsList.length} Product
        </Text>
        <View>
          <Text>Popular</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.itemWrapper}>
          {currentCatItemsList.map((item) => (
            <SingleProduct key={item[0]} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  item: {
    paddingVertical: 15,
    paddingRight: 40,
    marginVertical: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#bfbfc0',
  },
  activeTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#161616',
  },

  filterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  totalProductText: {
    fontSize: 14,
    color: '#797979',
  },

  itemWrapper: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default App
