import React, { useEffect } from 'react';
import { View, Text, Dimensions, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useSensorData } from '../../hooks/useSensorData';
import { appTheme } from '../../themes/appTheme';

export const SensorData = () => {

    const { isLoading, data, today, yesterday, beforeYesterday, loadData } = useSensorData();

    useEffect(() => {
        if (!data || !today) loadData();
    }, []);

    const chartConfig = {
        backgroundColor: "black",
        backgroundGradientFrom: "blue",
        backgroundGradientTo: "white",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
        labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
        style:{
            borderRadius: 20,
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "white"
        }
    }

    const height = Dimensions.get("window").height;
    const width = Dimensions.get("window").width;

    if (isLoading) return <ActivityIndicator color="black" size={80}/>;

    return(
        <View
            style={ appTheme.marginGlobal }
        >
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                refreshControl={
                    <RefreshControl 
                        onRefresh={ loadData } 
                        refreshing={ isLoading }
                    />
                }
            >
                <View
                    style={ appTheme.container }
                >
                    <Text
                        style={ appTheme.title }
                    >
                        Total Registros: { ( !isLoading ) && data.numberRegisters }
                    </Text>
                    <Text
                        style={ appTheme.title }
                    >
                        Información del sensor del día de hoy
                    </Text>
                    <Text
                        style={ appTheme.title }
                    >
                        Temperatura max: { (!isLoading) && today?.max }
                        { `\n` }
                        Temperatura min: { (!isLoading) && today?.min }
                    </Text>
                    { today?.values?.length > 0 && today?.labels?.length > 0 && (
                      <LineChart
                        data={{
                          labels: today.labels,
                          datasets: [{ data: today.values }]
                        }}
                        width={width * 0.9}
                        height={height * 0.3}
                        chartConfig={chartConfig}
                        style={{ borderRadius: 20 }}
                      />
                    )}
                </View>
                <View
                    style={ appTheme.container }
                >
                    <Text
                        style={ appTheme.title }
                    >
                        Información del sensor del día de ayer
                    </Text>
                    <Text
                        style={ appTheme.title }
                    >
                        Temperatura max: { (!isLoading) && yesterday.max }
                        { `\n` }
                        Temperatura min: { (!isLoading) && yesterday.min }
                    </Text>
                    { yesterday?.values?.length > 0 && yesterday?.labels?.length > 0 && (
                      <LineChart
                        data={{
                          labels: yesterday.labels,
                          datasets: [{ data: yesterday.values }]
                        }}
                        width={width * 0.9}
                        height={height * 0.3}
                        chartConfig={chartConfig}
                        style={{ borderRadius: 20 }}
                      />
                    )}
                </View>
                <View
                    style={ appTheme.container }
                >
                    <Text
                        style={ appTheme.title }
                    >
                        Información del sensor del día de ante ayer
                    </Text>
                    <Text
                        style={ appTheme.title }
                    >
                        Temperatura max: { (!isLoading) && beforeYesterday.max }
                        { `\n` }
                        Temperatura min: { (!isLoading) && beforeYesterday.min }
                    </Text>
                    { beforeYesterday?.values?.length > 0 && beforeYesterday?.labels?.length > 0 && (
                      <LineChart
                        data={{
                          labels: beforeYesterday.labels,
                          datasets: [{ data: beforeYesterday.values }]
                        }}
                        width={width * 0.9}
                        height={height * 0.3}
                        chartConfig={chartConfig}
                        style={{ borderRadius: 20 }}
                      />
                    )}
                </View>
            </ScrollView>
        </View>
    );
}
