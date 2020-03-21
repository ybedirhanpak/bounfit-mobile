import React, { useState, useEffect, useCallback } from 'react'
import { Alert } from 'react-native';
import moment from 'moment';
import NetInfo from "@react-native-community/netinfo";
import { GetRequest } from '../../helpers/api-helper';
import { SCHOOL_MEALS } from '../../config/index';

//Components
import SchoolCard from '../../components/schoolCard';
import SchoolCardPlaceholder from '../../placeholders/School/schoolCard';
import { Layout, Text } from '@ui-kitten/components';

export default SchoolCardContainer = (props) => {
    const [meal, setMeal] = useState();
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchMeal = async () => {
        const networkState = await NetInfo.fetch();
        if (networkState.isConnected) {
            setLoading(true);
            GetRequest("/school/getCurrentMeals")
                .then(response => response.json())
                .then((data) => {
                    console.log(`Meal fetched successfully `);
                    const meal = pickMeal(data);
                    setMeal(meal);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(`Error fetching current meals: ${err}`);
                    Alert.alert(
                        'Error',
                        `Error fetching current meals: ${err}`,
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: false },
                    );
                });
        } else {
            Alert.alert(
                'Network connection lost',
                `Please connect to internet and try again.`,
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        }
    }

    const isWeekend = (day) => {
        // Sunday: 0, Monday: 1, Tuesday: 2, ..., Saturday: 6
        return (day === 6 || day === 0);
    }

    const pickMeal = (data) => {
        if (!data)
            return null;

        //Compare current time and lunch end time.
        const now = moment().utc();
        console.log(now.toDate());
        let lunchEnd;
        if (isWeekend(now.weekday()))
            lunchEnd = moment(SCHOOL_MEALS.weekend.lunchEnd, "HH:mm a");
        else
            lunchEnd = moment(SCHOOL_MEALS.weekday.lunchEnd, "HH:mm a");

        if (now.isBefore(lunchEnd)) {
            setTitle("Lunch");
            return (data.lunch);
        } else {
            setTitle("Dinner");
            return (data.dinner);
        }
    }

    const renderTitle = (styles) => (
        <Text style={styles.title}>{title}</Text>
    )

    const renderSchoolCard = () => {
        if (loading) {
            return (<SchoolCardPlaceholder type="Loading" />)
        } else if (meal) {
            return (<SchoolCard {...props} meal={meal} renderTitle={renderTitle} />)
        }

        return (<SchoolCardPlaceholder type="Loading" />);
    }

    useEffect(() => {
        fetchMeal();
    }, []);

    useEffect(() => {
        if (props.refreshing) {
            fetchMeal();
        }
    }, [props.refreshing])

    return (
        <Layout>
            {renderSchoolCard()}
        </Layout>
    )
}
