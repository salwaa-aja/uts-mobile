import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const sudahSelesai = status === 'selesai';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View
        style={[
          styles.badge,
          sudahSelesai ? styles.badgeSelesai : styles.badgeProses,
        ]}
      >
        <Text
          style={[
            styles.status,
            sudahSelesai ? styles.teksSelesai : styles.teksProses,
          ]}
        >
          {status}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 10,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 14,
  },
  badgeSelesai: {
    backgroundColor: '#DCFCE7',
  },
  badgeProses: {
    backgroundColor: '#FFEDD5',
  },
  status: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  teksSelesai: {
    color: '#15803D',
  },
  teksProses: {
    color: '#C2410C',
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});