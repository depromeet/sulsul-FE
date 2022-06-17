import axios from '@/configs/axios';

export interface IMemberRecord {
  id: number;
  name: string;
}

export const deleteMember = async () => {
  const res = await axios.delete('/api/v1/members');
  return res.data;
};
