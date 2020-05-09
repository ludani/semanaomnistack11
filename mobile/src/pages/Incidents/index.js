import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import LogoImg from '../../assets/logo.png';

import style from './style';

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
        
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={LogoImg} />
                <Text style={style.text}>
                    Total de <Text style={style.headerTextBold}>0 casos</Text>
                </Text>
            </View>
            <Text style={style.title}>Bem-Vindo</Text>
            <Text style={style.description}>Escolha um dos caso abaixo e salve o texto. </Text>

        <FlatList 
            style={style.IncidentList}
            data={[1, 2, 3, 4, 5]}
            keyExtractor={incident => String(incident)}
            showsHorizontalScrollIndicator={false}
            renderItem={() => (
                <View style={style.incident}>

                <Text style={style.incidentProperty}> ONG:  </Text>
                <Text style={style.incidentValue}> APAD: </Text>

                <Text style={style.incidentProperty}> ONG:  </Text>
                <Text style={style.incidentValue}> Cadelinha: </Text>

                <Text style={style.incidentProperty}> ONG:  </Text>
                <Text style={style.incidentValue}> R$ 120,00 </Text>

                <TouchableOpacity 
                        style={style.detailsButton}
                        onPress={navigateToDetail}
                        >
                <Text style={style.detailsButtonText}>Ver mais Detalhes</Text>
                <Feather name="arrow-right" size={16} color="#E02041" />
                </TouchableOpacity>
            </View>
                )}
            />   
        </View>
    )
;    
}