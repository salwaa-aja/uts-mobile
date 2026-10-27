import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import InfoCard from './src/components/InfoCard';

// Dataset statis berada di luar komponen utama.
const DAFTAR_MAHASISWA = [
  {
    id: '1',
    nama: 'Alifia Putri',
    prodi: 'Sistem Informasi',
  },
  {
    id: '2',
    nama: 'Budi Santoso',
    prodi: 'Teknologi Informasi',
  },
  {
    id: '3',
    nama: 'Citra Dewi',
    prodi: 'Sistem Informasi',
  },
  {
    id: '4',
    nama: 'Dimas Anggara',
    prodi: 'Teknik Informatika',
  },
  {
    id: '5',
    nama: 'Eka Nur Safitri',
    prodi: 'Sistem Informasi',
  },
];

export default function App() {
  const [keyword, setKeyword] = useState('');

  const hasilPencarian = DAFTAR_MAHASISWA.filter((mahasiswa) =>
    mahasiswa.nama
      .toLowerCase()
      .includes(keyword.trim().toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        data={hasilPencarian}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <Text style={styles.heading}>UTS Lab Pemrograman Mobile</Text>

            <Text style={styles.subtitle}>
              Info kegiatan dan direktori mahasiswa
            </Text>

            <Text style={styles.sectionTitle}>
              Soal 1: Info Kegiatan
            </Text>

            <InfoCard
              title="Mengerjakan Tugas Mobile"
              status="selesai"
              onPress={() =>
                Alert.alert(
                  'Detail Kegiatan',
                  'Tugas Mobile sudah selesai dikerjakan.'
                )
              }
            />

            <InfoCard
              title="Belajar React Native"
              status="proses"
              onPress={() =>
                Alert.alert(
                  'Detail Kegiatan',
                  'Belajar React Native masih dalam proses.'
                )
              }
            />

            <Text style={styles.sectionTitle}>
              Soal 2: Direktori Mahasiswa
            </Text>

            <TextInput
              style={styles.searchInput}
              placeholder="Cari nama mahasiswa..."
              placeholderTextColor="#64748B"
              value={keyword}
              onChangeText={setKeyword}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Text style={styles.resultCount}>
              Jumlah hasil: {hasilPencarian.length}
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
            <Text style={styles.studentName}>{item.nama}</Text>
            <Text style={styles.studentProgram}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Data tidak ditemukan!
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 8,
    marginBottom: 14,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#0F172A',
    marginBottom: 10,
  },
  resultCount: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 14,
  },
  studentCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 4,
  },
  studentProgram: {
    fontSize: 14,
    color: '#64748B',
  },
  emptyText: {
    textAlign: 'center',
    color: '#DC2626',
    fontSize: 16,
    marginTop: 24,
  },
});