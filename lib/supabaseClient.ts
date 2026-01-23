// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pfwlithsdbwpsmpivldp.supabase.co';
const supabaseKey = 'sb_publishable_4aRAdlKqfWGw7CoNxpFmTw_zBfxyycY';

export const supabase = createClient(supabaseUrl, supabaseKey);
